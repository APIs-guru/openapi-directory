import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV2AuthorizationCodeDefinitionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetApiV2AuthorizationCodeDefinitionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV2AuthorizationCodeDefinitionsIdPathParams;
}


export class GetApiV2AuthorizationCodeDefinitionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  authorizationCodesSharedModelsAuthorizationCodeDefinition?: shared.AuthorizationCodesSharedModelsAuthorizationCodeDefinition;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

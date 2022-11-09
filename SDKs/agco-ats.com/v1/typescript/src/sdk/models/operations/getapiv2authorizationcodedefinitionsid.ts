import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV2AuthorizationCodeDefinitionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetApiV2AuthorizationCodeDefinitionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV2AuthorizationCodeDefinitionsIdPathParams;
}


export class GetApiV2AuthorizationCodeDefinitionsIdResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  authorizationCodesSharedModelsAuthorizationCodeDefinition?: shared.AuthorizationCodesSharedModelsAuthorizationCodeDefinition;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

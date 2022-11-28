import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthorizationCodesGetContactInformationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class AuthorizationCodesGetContactInformationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AuthorizationCodesGetContactInformationPathParams;
}


export class AuthorizationCodesGetContactInformationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  authorizationCodesSharedModelsAuthorizationContactInformation?: shared.AuthorizationCodesSharedModelsAuthorizationContactInformation;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthenticationPutManageTokensPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserID" })
  userId: number;
}


export class AuthenticationPutManageTokensRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiModelsTokenOptions?: shared.ApiModelsTokenOptions;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsTokenOptions1?: shared.ApiModelsTokenOptions;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiModelsTokenOptions2?: shared.ApiModelsTokenOptions;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AuthenticationPutManageTokensRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AuthenticationPutManageTokensPathParams;

  @SpeakeasyMetadata()
  request: AuthenticationPutManageTokensRequests;
}


export class AuthenticationPutManageTokensResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

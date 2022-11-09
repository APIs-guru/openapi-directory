import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthenticationPutManageTokensPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=UserID" })
  userId: number;
}


export class AuthenticationPutManageTokensRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiModelsTokenOptions?: shared.ApiModelsTokenOptions;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsTokenOptions1?: shared.ApiModelsTokenOptions;

  @Metadata({ data: "request, media_type=text/json" })
  apiModelsTokenOptions2?: shared.ApiModelsTokenOptions;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AuthenticationPutManageTokensRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthenticationPutManageTokensPathParams;

  @Metadata()
  request: AuthenticationPutManageTokensRequests;
}


export class AuthenticationPutManageTokensResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

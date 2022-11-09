import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersPutCurrentUserRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiModelsUser?: shared.ApiModelsUser;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsUser1?: shared.ApiModelsUser;

  @Metadata({ data: "request, media_type=text/json" })
  apiModelsUser2?: shared.ApiModelsUser;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class UsersPutCurrentUserRequest extends SpeakeasyBase {
  @Metadata()
  request: UsersPutCurrentUserRequests;
}


export class UsersPutCurrentUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersPostRequests extends SpeakeasyBase {
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


export class UsersPostRequest extends SpeakeasyBase {
  @Metadata()
  request: UsersPostRequests;
}


export class UsersPostResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsUser?: shared.ApiModelsUser;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

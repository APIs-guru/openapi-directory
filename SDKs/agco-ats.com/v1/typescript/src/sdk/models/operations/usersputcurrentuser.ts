import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersPutCurrentUserRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiModelsUser?: shared.ApiModelsUser;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsUser1?: shared.ApiModelsUser;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiModelsUser2?: shared.ApiModelsUser;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class UsersPutCurrentUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: UsersPutCurrentUserRequests;
}


export class UsersPutCurrentUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

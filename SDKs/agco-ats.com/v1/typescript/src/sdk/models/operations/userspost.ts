import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersPostRequests extends SpeakeasyBase {
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


export class UsersPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: UsersPostRequests;
}


export class UsersPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsUser?: shared.ApiModelsUser;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

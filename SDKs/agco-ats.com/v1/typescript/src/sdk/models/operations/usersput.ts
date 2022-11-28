import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UsersPutRequests extends SpeakeasyBase {
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


export class UsersPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersPutPathParams;

  @SpeakeasyMetadata()
  request: UsersPutRequests;
}


export class UsersPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

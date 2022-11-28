import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClientsPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class ClientsPutRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateSystemModelsClient?: shared.UpdateSystemModelsClient;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsClient1?: shared.UpdateSystemModelsClient;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateSystemModelsClient2?: shared.UpdateSystemModelsClient;
}


export class ClientsPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClientsPutPathParams;

  @SpeakeasyMetadata()
  request: ClientsPutRequests;
}


export class ClientsPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

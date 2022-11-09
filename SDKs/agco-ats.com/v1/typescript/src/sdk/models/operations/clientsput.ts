import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClientsPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class ClientsPutRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  updateSystemModelsClient?: shared.UpdateSystemModelsClient;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsClient1?: shared.UpdateSystemModelsClient;

  @Metadata({ data: "request, media_type=text/json" })
  updateSystemModelsClient2?: shared.UpdateSystemModelsClient;
}


export class ClientsPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClientsPutPathParams;

  @Metadata()
  request: ClientsPutRequests;
}


export class ClientsPutResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

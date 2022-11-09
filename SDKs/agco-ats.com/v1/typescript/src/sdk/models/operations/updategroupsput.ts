import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupsPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class UpdateGroupsPutRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  updateSystemModelsUpdateGroup?: shared.UpdateSystemModelsUpdateGroup;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsUpdateGroup1?: shared.UpdateSystemModelsUpdateGroup;

  @Metadata({ data: "request, media_type=text/json" })
  updateSystemModelsUpdateGroup2?: shared.UpdateSystemModelsUpdateGroup;
}


export class UpdateGroupsPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupsPutPathParams;

  @Metadata()
  request: UpdateGroupsPutRequests;
}


export class UpdateGroupsPutResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

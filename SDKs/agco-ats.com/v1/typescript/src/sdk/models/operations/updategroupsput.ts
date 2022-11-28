import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGroupsPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class UpdateGroupsPutRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateSystemModelsUpdateGroup?: shared.UpdateSystemModelsUpdateGroup;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsUpdateGroup1?: shared.UpdateSystemModelsUpdateGroup;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateSystemModelsUpdateGroup2?: shared.UpdateSystemModelsUpdateGroup;
}


export class UpdateGroupsPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGroupsPutPathParams;

  @SpeakeasyMetadata()
  request: UpdateGroupsPutRequests;
}


export class UpdateGroupsPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

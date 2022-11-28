import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivitiesPutActivityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityID" })
  activityId: number;
}


export class ActivitiesPutActivityRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  buildSystemSharedDtoActivity?: shared.BuildSystemSharedDtoActivityInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  buildSystemSharedDtoActivity1?: shared.BuildSystemSharedDtoActivityInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  buildSystemSharedDtoActivity2?: shared.BuildSystemSharedDtoActivityInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ActivitiesPutActivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivitiesPutActivityPathParams;

  @SpeakeasyMetadata()
  request: ActivitiesPutActivityRequestsInput;
}


export class ActivitiesPutActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

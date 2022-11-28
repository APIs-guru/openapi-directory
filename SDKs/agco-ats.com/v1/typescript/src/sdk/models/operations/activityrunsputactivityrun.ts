import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityRunsPutActivityRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityRunID" })
  activityRunId: number;
}


export class ActivityRunsPutActivityRunRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  buildSystemSharedDtoActivityRun?: shared.BuildSystemSharedDtoActivityRunInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  buildSystemSharedDtoActivityRun1?: shared.BuildSystemSharedDtoActivityRunInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  buildSystemSharedDtoActivityRun2?: shared.BuildSystemSharedDtoActivityRunInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ActivityRunsPutActivityRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityRunsPutActivityRunPathParams;

  @SpeakeasyMetadata()
  request: ActivityRunsPutActivityRunRequestsInput;
}


export class ActivityRunsPutActivityRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

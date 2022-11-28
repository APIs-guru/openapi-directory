import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityRunsPutActivityRunStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityRunID" })
  activityRunId: number;
}


export class ActivityRunsPutActivityRunStatusRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  buildSystemSharedDtoActivityRunStatus?: shared.BuildSystemSharedDtoActivityRunStatus;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  buildSystemSharedDtoActivityRunStatus1?: shared.BuildSystemSharedDtoActivityRunStatus;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  buildSystemSharedDtoActivityRunStatus2?: shared.BuildSystemSharedDtoActivityRunStatus;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ActivityRunsPutActivityRunStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityRunsPutActivityRunStatusPathParams;

  @SpeakeasyMetadata()
  request: ActivityRunsPutActivityRunStatusRequests;
}


export class ActivityRunsPutActivityRunStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

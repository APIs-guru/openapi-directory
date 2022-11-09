import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityRunsPutActivityRunStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityRunID" })
  activityRunId: number;
}


export class ActivityRunsPutActivityRunStatusRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  buildSystemSharedDtoActivityRunStatus?: shared.BuildSystemSharedDtoActivityRunStatus;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  buildSystemSharedDtoActivityRunStatus1?: shared.BuildSystemSharedDtoActivityRunStatus;

  @Metadata({ data: "request, media_type=text/json" })
  buildSystemSharedDtoActivityRunStatus2?: shared.BuildSystemSharedDtoActivityRunStatus;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ActivityRunsPutActivityRunStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityRunsPutActivityRunStatusPathParams;

  @Metadata()
  request: ActivityRunsPutActivityRunStatusRequests;
}


export class ActivityRunsPutActivityRunStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityRunsGetActivityRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityRunID" })
  activityRunId: number;
}


export class ActivityRunsGetActivityRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityRunsGetActivityRunPathParams;
}


export class ActivityRunsGetActivityRunResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  buildSystemSharedDtoActivityRun?: shared.BuildSystemSharedDtoActivityRun;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

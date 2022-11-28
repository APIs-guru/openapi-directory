import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityRunsGetActivityRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityRunID" })
  activityRunId: number;
}


export class ActivityRunsGetActivityRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityRunsGetActivityRunPathParams;
}


export class ActivityRunsGetActivityRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  buildSystemSharedDtoActivityRun?: shared.BuildSystemSharedDtoActivityRun;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

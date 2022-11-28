import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityRunsGetActivityRunStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityRunID" })
  activityRunId: number;
}


export class ActivityRunsGetActivityRunStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityRunsGetActivityRunStatusPathParams;
}


export class ActivityRunsGetActivityRunStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  buildSystemSharedDtoActivityRunStatus?: shared.BuildSystemSharedDtoActivityRunStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

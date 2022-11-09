import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityRunsGetActivityRunStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityRunID" })
  activityRunId: number;
}


export class ActivityRunsGetActivityRunStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityRunsGetActivityRunStatusPathParams;
}


export class ActivityRunsGetActivityRunStatusResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  buildSystemSharedDtoActivityRunStatus?: shared.BuildSystemSharedDtoActivityRunStatus;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

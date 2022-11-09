import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ActivityRunsGetActivityRunsStatusEnum {
    Ready = "Ready"
,    InProgress = "InProgress"
,    Succeeded = "Succeeded"
,    Cancelled = "Cancelled"
,    Failed = "Failed"
}


export class ActivityRunsGetActivityRunsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ActivityRunsGetActivityRunsStatusEnum;
}


export class ActivityRunsGetActivityRunsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ActivityRunsGetActivityRunsQueryParams;
}


export class ActivityRunsGetActivityRunsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseBuildSystemSharedDtoActivityRun?: shared.ApiPagedResponseBuildSystemSharedDtoActivityRun;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

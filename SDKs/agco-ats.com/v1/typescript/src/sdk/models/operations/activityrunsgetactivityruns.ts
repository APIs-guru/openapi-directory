import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ActivityRunsGetActivityRunsStatusEnum {
    Ready = "Ready",
    InProgress = "InProgress",
    Succeeded = "Succeeded",
    Cancelled = "Cancelled",
    Failed = "Failed"
}


export class ActivityRunsGetActivityRunsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ActivityRunsGetActivityRunsStatusEnum;
}


export class ActivityRunsGetActivityRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ActivityRunsGetActivityRunsQueryParams;
}


export class ActivityRunsGetActivityRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseBuildSystemSharedDtoActivityRun?: shared.ApiPagedResponseBuildSystemSharedDtoActivityRun;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

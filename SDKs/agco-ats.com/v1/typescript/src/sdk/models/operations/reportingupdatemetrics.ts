import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportingUpdateMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" })
  updateGroupId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bundleNumber" })
  bundleNumber?: number;
}


export class ReportingUpdateMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportingUpdateMetricsQueryParams;
}


export class ReportingUpdateMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSystemModelsUpdateMetricsData?: shared.UpdateSystemModelsUpdateMetricsData;
}

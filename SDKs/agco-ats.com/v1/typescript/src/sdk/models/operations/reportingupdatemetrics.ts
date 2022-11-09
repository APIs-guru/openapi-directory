import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportingUpdateMetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" })
  updateGroupId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bundleNumber" })
  bundleNumber?: number;
}


export class ReportingUpdateMetricsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReportingUpdateMetricsQueryParams;
}


export class ReportingUpdateMetricsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSystemModelsUpdateMetricsData?: shared.UpdateSystemModelsUpdateMetricsData;
}

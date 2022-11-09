import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportingBundleStatusSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=BundleID" })
  bundleId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ReportingBundleStatusSummaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReportingBundleStatusSummaryQueryParams;
}


export class ReportingBundleStatusSummaryResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseUpdateSystemModelsPackageStatusSummary?: shared.ApiPagedResponseUpdateSystemModelsPackageStatusSummary;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

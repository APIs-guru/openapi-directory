import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportingPackageStatusSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PackageID" })
  packageId: string;
}


export class ReportingPackageStatusSummaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReportingPackageStatusSummaryQueryParams;
}


export class ReportingPackageStatusSummaryResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSystemModelsPackageStatusSummary?: shared.UpdateSystemModelsPackageStatusSummary;
}

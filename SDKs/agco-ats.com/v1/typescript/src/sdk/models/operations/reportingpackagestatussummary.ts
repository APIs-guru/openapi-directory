import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportingPackageStatusSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PackageID" })
  packageId: string;
}


export class ReportingPackageStatusSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportingPackageStatusSummaryQueryParams;
}


export class ReportingPackageStatusSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSystemModelsPackageStatusSummary?: shared.UpdateSystemModelsPackageStatusSummary;
}

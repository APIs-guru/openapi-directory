import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageTypetoBundlesGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BundleID" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class PackageTypetoBundlesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PackageTypetoBundlesGetQueryParams;
}


export class PackageTypetoBundlesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseUpdateSystemModelsPackageTypeIDtoBundle?: shared.ApiPagedResponseUpdateSystemModelsPackageTypeIDtoBundle;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackageTypetoBundlesGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=BundleID" })
  bundleId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class PackageTypetoBundlesGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PackageTypetoBundlesGetQueryParams;
}


export class PackageTypetoBundlesGetResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseUpdateSystemModelsPackageTypeIDtoBundle?: shared.ApiPagedResponseUpdateSystemModelsPackageTypeIDtoBundle;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

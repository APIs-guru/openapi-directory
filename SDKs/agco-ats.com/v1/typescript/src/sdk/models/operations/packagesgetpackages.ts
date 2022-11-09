import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackagesGetPackagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class PackagesGetPackagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PackagesGetPackagesQueryParams;
}


export class PackagesGetPackagesResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseUpdateSystemModelsPackage?: shared.ApiPagedResponseUpdateSystemModelsPackage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

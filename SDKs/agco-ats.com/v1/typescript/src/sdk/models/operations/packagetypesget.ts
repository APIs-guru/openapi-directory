import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackageTypesGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userID" })
  userId?: number;
}


export class PackageTypesGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PackageTypesGetQueryParams;
}


export class PackageTypesGetResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseUpdateSystemModelsPackageType?: shared.ApiPagedResponseUpdateSystemModelsPackageType;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

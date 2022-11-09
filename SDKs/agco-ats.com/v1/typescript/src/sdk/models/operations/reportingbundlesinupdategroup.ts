import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportingBundlesInUpdateGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ID" })
  id: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IncludeInactive" })
  includeInactive: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ReportingBundlesInUpdateGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReportingBundlesInUpdateGroupQueryParams;
}


export class ReportingBundlesInUpdateGroupResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseUpdateSystemModelsBundle?: shared.ApiPagedResponseUpdateSystemModelsBundle;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

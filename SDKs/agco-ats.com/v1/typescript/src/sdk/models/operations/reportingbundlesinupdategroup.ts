import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportingBundlesInUpdateGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ID" })
  id: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncludeInactive" })
  includeInactive: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ReportingBundlesInUpdateGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportingBundlesInUpdateGroupQueryParams;
}


export class ReportingBundlesInUpdateGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseUpdateSystemModelsBundle?: shared.ApiPagedResponseUpdateSystemModelsBundle;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

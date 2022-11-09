import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupsGetUpdateGroupBundlesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class UpdateGroupsGetUpdateGroupBundlesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=IncludeInactive" })
  includeInactive: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class UpdateGroupsGetUpdateGroupBundlesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupsGetUpdateGroupBundlesPathParams;

  @Metadata()
  queryParams: UpdateGroupsGetUpdateGroupBundlesQueryParams;
}


export class UpdateGroupsGetUpdateGroupBundlesResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseUpdateSystemModelsBundle?: shared.ApiPagedResponseUpdateSystemModelsBundle;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

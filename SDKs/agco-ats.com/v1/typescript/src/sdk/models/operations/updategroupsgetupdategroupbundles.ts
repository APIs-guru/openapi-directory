import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGroupsGetUpdateGroupBundlesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class UpdateGroupsGetUpdateGroupBundlesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncludeInactive" })
  includeInactive: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class UpdateGroupsGetUpdateGroupBundlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGroupsGetUpdateGroupBundlesPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateGroupsGetUpdateGroupBundlesQueryParams;
}


export class UpdateGroupsGetUpdateGroupBundlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseUpdateSystemModelsBundle?: shared.ApiPagedResponseUpdateSystemModelsBundle;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

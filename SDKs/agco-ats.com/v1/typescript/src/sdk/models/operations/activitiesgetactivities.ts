import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivitiesGetActivitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isIncludeDeleted" })
  isIncludeDeleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ActivitiesGetActivitiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ActivitiesGetActivitiesQueryParams;
}


export class ActivitiesGetActivitiesResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseBuildSystemSharedDtoActivity?: shared.ApiPagedResponseBuildSystemSharedDtoActivity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

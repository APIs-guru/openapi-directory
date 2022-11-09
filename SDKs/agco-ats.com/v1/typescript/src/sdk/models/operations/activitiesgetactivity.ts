import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivitiesGetActivityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityID" })
  activityId: number;
}


export class ActivitiesGetActivityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isIncludeDeleted" })
  isIncludeDeleted?: boolean;
}


export class ActivitiesGetActivityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivitiesGetActivityPathParams;

  @Metadata()
  queryParams: ActivitiesGetActivityQueryParams;
}


export class ActivitiesGetActivityResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  buildSystemSharedDtoActivity?: shared.BuildSystemSharedDtoActivity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

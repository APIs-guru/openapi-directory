import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivitiesGetActivityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityID" })
  activityId: number;
}


export class ActivitiesGetActivityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isIncludeDeleted" })
  isIncludeDeleted?: boolean;
}


export class ActivitiesGetActivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivitiesGetActivityPathParams;

  @SpeakeasyMetadata()
  queryParams: ActivitiesGetActivityQueryParams;
}


export class ActivitiesGetActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  buildSystemSharedDtoActivity?: shared.BuildSystemSharedDtoActivity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

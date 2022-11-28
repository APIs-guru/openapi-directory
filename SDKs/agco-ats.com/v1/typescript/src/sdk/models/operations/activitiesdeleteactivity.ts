import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActivitiesDeleteActivityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityID" })
  activityId: number;
}


export class ActivitiesDeleteActivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivitiesDeleteActivityPathParams;
}


export class ActivitiesDeleteActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

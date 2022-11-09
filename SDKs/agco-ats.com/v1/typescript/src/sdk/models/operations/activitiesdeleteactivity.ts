import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActivitiesDeleteActivityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityID" })
  activityId: number;
}


export class ActivitiesDeleteActivityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivitiesDeleteActivityPathParams;
}


export class ActivitiesDeleteActivityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

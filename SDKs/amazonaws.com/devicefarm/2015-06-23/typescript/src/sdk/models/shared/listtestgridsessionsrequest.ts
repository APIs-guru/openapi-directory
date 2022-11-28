import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestGridSessionStatusEnum } from "./testgridsessionstatusenum";



export class ListTestGridSessionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTimeAfter" })
  creationTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=creationTimeBefore" })
  creationTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=endTimeAfter" })
  endTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=endTimeBefore" })
  endTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=maxResult" })
  maxResult?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=projectArn" })
  projectArn: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TestGridSessionStatusEnum;
}

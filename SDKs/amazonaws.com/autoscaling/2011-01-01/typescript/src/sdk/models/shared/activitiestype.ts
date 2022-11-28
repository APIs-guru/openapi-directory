import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";



export class ActivitiesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Activity })
  activities: Activity[];

  @SpeakeasyMetadata()
  nextToken?: string;
}

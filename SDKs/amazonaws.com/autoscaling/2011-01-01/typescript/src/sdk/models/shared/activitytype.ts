import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";



export class ActivityType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activity?: Activity;
}

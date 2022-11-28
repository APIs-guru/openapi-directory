import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";



export class DetachInstancesAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Activity })
  activities?: Activity[];
}

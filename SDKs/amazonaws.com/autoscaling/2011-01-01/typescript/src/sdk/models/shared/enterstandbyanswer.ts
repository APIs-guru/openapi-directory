import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";



export class EnterStandbyAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Activity })
  activities?: Activity[];
}

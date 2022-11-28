import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";



export class ExitStandbyAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Activity })
  activities?: Activity[];
}

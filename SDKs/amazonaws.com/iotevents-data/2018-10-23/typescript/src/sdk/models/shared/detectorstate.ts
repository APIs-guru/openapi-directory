import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Timer } from "./timer";
import { Variable } from "./variable";



// DetectorState
/** 
 * Information about the current state of the detector instance.
**/
export class DetectorState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stateName" })
  stateName: string;

  @SpeakeasyMetadata({ data: "json, name=timers", elemType: Timer })
  timers: Timer[];

  @SpeakeasyMetadata({ data: "json, name=variables", elemType: Variable })
  variables: Variable[];
}

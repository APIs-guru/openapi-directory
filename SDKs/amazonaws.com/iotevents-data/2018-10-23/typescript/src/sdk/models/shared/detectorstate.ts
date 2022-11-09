import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Timer } from "./timer";
import { Variable } from "./variable";


// DetectorState
/** 
 * Information about the current state of the detector instance.
**/
export class DetectorState extends SpeakeasyBase {
  @Metadata({ data: "json, name=stateName" })
  stateName: string;

  @Metadata({ data: "json, name=timers", elemType: shared.Timer })
  timers: Timer[];

  @Metadata({ data: "json, name=variables", elemType: shared.Variable })
  variables: Variable[];
}

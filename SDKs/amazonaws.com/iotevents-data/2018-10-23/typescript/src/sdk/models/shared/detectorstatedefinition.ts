import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimerDefinition } from "./timerdefinition";
import { VariableDefinition } from "./variabledefinition";



// DetectorStateDefinition
/** 
 * The new state, variable values, and timer settings of the detector (instance).
**/
export class DetectorStateDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stateName" })
  stateName: string;

  @SpeakeasyMetadata({ data: "json, name=timers", elemType: TimerDefinition })
  timers: TimerDefinition[];

  @SpeakeasyMetadata({ data: "json, name=variables", elemType: VariableDefinition })
  variables: VariableDefinition[];
}

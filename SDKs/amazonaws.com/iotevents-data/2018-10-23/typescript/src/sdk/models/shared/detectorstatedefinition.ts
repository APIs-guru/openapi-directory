import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimerDefinition } from "./timerdefinition";
import { VariableDefinition } from "./variabledefinition";


// DetectorStateDefinition
/** 
 * The new state, variable values, and timer settings of the detector (instance).
**/
export class DetectorStateDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=stateName" })
  stateName: string;

  @Metadata({ data: "json, name=timers", elemType: shared.TimerDefinition })
  timers: TimerDefinition[];

  @Metadata({ data: "json, name=variables", elemType: shared.VariableDefinition })
  variables: VariableDefinition[];
}

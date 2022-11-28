import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { State } from "./state";



// DetectorModelDefinition
/** 
 * Information that defines how a detector operates.
**/
export class DetectorModelDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initialStateName" })
  initialStateName: string;

  @SpeakeasyMetadata({ data: "json, name=states", elemType: State })
  states: State[];
}

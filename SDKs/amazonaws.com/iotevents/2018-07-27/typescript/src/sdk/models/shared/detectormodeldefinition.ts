import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { State } from "./state";


// DetectorModelDefinition
/** 
 * Information that defines how a detector operates.
**/
export class DetectorModelDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=initialStateName" })
  initialStateName: string;

  @Metadata({ data: "json, name=states", elemType: shared.State })
  states: State[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SsmControls } from "./ssmcontrols";



// ExecutionControls
/** 
 * The controls that Config uses for executing remediations.
**/
export class ExecutionControls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SsmControls" })
  ssmControls?: SsmControls;
}

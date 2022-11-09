import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SsmControls } from "./ssmcontrols";


// ExecutionControls
/** 
 * The controls that Config uses for executing remediations.
**/
export class ExecutionControls extends SpeakeasyBase {
  @Metadata({ data: "json, name=SsmControls" })
  ssmControls?: SsmControls;
}

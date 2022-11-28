import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RunCommandTarget } from "./runcommandtarget";



// RunCommandParameters
/** 
 * This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command. 
**/
export class RunCommandParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RunCommandTargets", elemType: RunCommandTarget })
  runCommandTargets: RunCommandTarget[];
}

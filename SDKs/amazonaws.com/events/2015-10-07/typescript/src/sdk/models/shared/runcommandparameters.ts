import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RunCommandTarget } from "./runcommandtarget";


// RunCommandParameters
/** 
 * This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command. 
**/
export class RunCommandParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=RunCommandTargets", elemType: shared.RunCommandTarget })
  runCommandTargets: RunCommandTarget[];
}

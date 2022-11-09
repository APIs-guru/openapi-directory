import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RunCommandTarget } from "./runcommandtarget";
/**
 * This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command.
**/
export declare class RunCommandParameters extends SpeakeasyBase {
    runCommandTargets: RunCommandTarget[];
}

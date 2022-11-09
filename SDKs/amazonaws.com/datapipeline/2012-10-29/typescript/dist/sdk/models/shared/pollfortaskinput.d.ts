import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceIdentity } from "./instanceidentity";
/**
 * Contains the parameters for PollForTask.
**/
export declare class PollForTaskInput extends SpeakeasyBase {
    hostname?: string;
    instanceIdentity?: InstanceIdentity;
    workerGroup: string;
}

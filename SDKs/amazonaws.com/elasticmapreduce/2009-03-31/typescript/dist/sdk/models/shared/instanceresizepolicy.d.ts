import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.
**/
export declare class InstanceResizePolicy extends SpeakeasyBase {
    instanceTerminationTimeout?: number;
    instancesToProtect?: string[];
    instancesToTerminate?: string[];
}

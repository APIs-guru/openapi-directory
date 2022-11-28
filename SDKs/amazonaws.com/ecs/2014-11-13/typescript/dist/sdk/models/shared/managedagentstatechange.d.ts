import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedAgentNameEnum } from "./managedagentnameenum";
/**
 * An object representing a change in state for a managed agent.
**/
export declare class ManagedAgentStateChange extends SpeakeasyBase {
    containerName: string;
    managedAgentName: ManagedAgentNameEnum;
    reason?: string;
    status: string;
}

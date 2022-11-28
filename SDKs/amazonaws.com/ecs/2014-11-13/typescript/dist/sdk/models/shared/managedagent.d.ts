import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedAgentNameEnum } from "./managedagentnameenum";
/**
 * Details about the managed agent status for the container.
**/
export declare class ManagedAgent extends SpeakeasyBase {
    lastStartedAt?: Date;
    lastStatus?: string;
    name?: ManagedAgentNameEnum;
    reason?: string;
}

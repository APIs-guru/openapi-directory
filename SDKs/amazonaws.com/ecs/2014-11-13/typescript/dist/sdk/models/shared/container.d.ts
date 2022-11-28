import { SpeakeasyBase } from "../../../internal/utils";
import { HealthStatusEnum } from "./healthstatusenum";
import { ManagedAgent } from "./managedagent";
import { NetworkBinding } from "./networkbinding";
import { NetworkInterface } from "./networkinterface";
/**
 * A Docker container that is part of a task.
**/
export declare class Container extends SpeakeasyBase {
    containerArn?: string;
    cpu?: string;
    exitCode?: number;
    gpuIds?: string[];
    healthStatus?: HealthStatusEnum;
    image?: string;
    imageDigest?: string;
    lastStatus?: string;
    managedAgents?: ManagedAgent[];
    memory?: string;
    memoryReservation?: string;
    name?: string;
    networkBindings?: NetworkBinding[];
    networkInterfaces?: NetworkInterface[];
    reason?: string;
    runtimeId?: string;
    taskArn?: string;
}

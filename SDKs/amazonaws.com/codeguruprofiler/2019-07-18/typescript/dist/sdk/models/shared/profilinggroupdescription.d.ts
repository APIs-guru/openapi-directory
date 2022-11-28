import { SpeakeasyBase } from "../../../internal/utils";
import { AgentOrchestrationConfig } from "./agentorchestrationconfig";
import { ComputePlatformEnum } from "./computeplatformenum";
import { ProfilingStatus } from "./profilingstatus";
/**
 *  Contains information about a profiling group.
**/
export declare class ProfilingGroupDescription extends SpeakeasyBase {
    agentOrchestrationConfig?: AgentOrchestrationConfig;
    arn?: string;
    computePlatform?: ComputePlatformEnum;
    createdAt?: Date;
    name?: string;
    profilingStatus?: ProfilingStatus;
    tags?: Map<string, string>;
    updatedAt?: Date;
}

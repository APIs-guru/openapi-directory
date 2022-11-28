import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoAgentStatus } from "./buildsystemshareddtoagentstatus";
import { BuildSystemSharedDtoStepConfiguration } from "./buildsystemshareddtostepconfiguration";
/**
 * A DTO for an IAgent
**/
export declare class BuildSystemSharedDtoAgent extends SpeakeasyBase {
    agentId?: number;
    keepAliveInterval: number;
    machineName: string;
    status: BuildSystemSharedDtoAgentStatus;
    stepConfigurations?: BuildSystemSharedDtoStepConfiguration[];
    userId: number;
}
/**
 * A DTO for an IAgent
**/
export declare class BuildSystemSharedDtoAgentInput extends SpeakeasyBase {
    agentId?: number;
    keepAliveInterval: number;
    machineName: string;
    status: BuildSystemSharedDtoAgentStatus;
    userId: number;
}

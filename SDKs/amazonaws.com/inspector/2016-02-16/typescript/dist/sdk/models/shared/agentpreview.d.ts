import { SpeakeasyBase } from "../../../internal/utils";
import { AgentHealthEnum } from "./agenthealthenum";
/**
 * Used as a response element in the <a>PreviewAgents</a> action.
**/
export declare class AgentPreview extends SpeakeasyBase {
    agentHealth?: AgentHealthEnum;
    agentId: string;
    agentVersion?: string;
    autoScalingGroup?: string;
    hostname?: string;
    ipv4Address?: string;
    kernelVersion?: string;
    operatingSystem?: string;
}

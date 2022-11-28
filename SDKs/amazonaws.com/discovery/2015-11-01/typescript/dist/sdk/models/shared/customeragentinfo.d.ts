import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Inventory data for installed discovery agents.
**/
export declare class CustomerAgentInfo extends SpeakeasyBase {
    activeAgents: number;
    blackListedAgents: number;
    healthyAgents: number;
    shutdownAgents: number;
    totalAgents: number;
    unhealthyAgents: number;
    unknownAgents: number;
}

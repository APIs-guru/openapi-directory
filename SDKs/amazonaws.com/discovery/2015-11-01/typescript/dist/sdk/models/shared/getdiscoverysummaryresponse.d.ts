import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerAgentInfo } from "./customeragentinfo";
import { CustomerConnectorInfo } from "./customerconnectorinfo";
export declare class GetDiscoverySummaryResponse extends SpeakeasyBase {
    agentSummary?: CustomerAgentInfo;
    applications?: number;
    connectorSummary?: CustomerConnectorInfo;
    servers?: number;
    serversMappedToApplications?: number;
    serversMappedtoTags?: number;
}

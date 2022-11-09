import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerAgentInfo } from "./customeragentinfo";
import { CustomerConnectorInfo } from "./customerconnectorinfo";


export class GetDiscoverySummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentSummary" })
  agentSummary?: CustomerAgentInfo;

  @Metadata({ data: "json, name=applications" })
  applications?: number;

  @Metadata({ data: "json, name=connectorSummary" })
  connectorSummary?: CustomerConnectorInfo;

  @Metadata({ data: "json, name=servers" })
  servers?: number;

  @Metadata({ data: "json, name=serversMappedToApplications" })
  serversMappedToApplications?: number;

  @Metadata({ data: "json, name=serversMappedtoTags" })
  serversMappedtoTags?: number;
}

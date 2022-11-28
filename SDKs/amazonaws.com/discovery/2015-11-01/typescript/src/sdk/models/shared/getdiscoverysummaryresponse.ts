import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerAgentInfo } from "./customeragentinfo";
import { CustomerConnectorInfo } from "./customerconnectorinfo";



export class GetDiscoverySummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentSummary" })
  agentSummary?: CustomerAgentInfo;

  @SpeakeasyMetadata({ data: "json, name=applications" })
  applications?: number;

  @SpeakeasyMetadata({ data: "json, name=connectorSummary" })
  connectorSummary?: CustomerConnectorInfo;

  @SpeakeasyMetadata({ data: "json, name=servers" })
  servers?: number;

  @SpeakeasyMetadata({ data: "json, name=serversMappedToApplications" })
  serversMappedToApplications?: number;

  @SpeakeasyMetadata({ data: "json, name=serversMappedtoTags" })
  serversMappedtoTags?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentConfiguration } from "./agentconfiguration";



// ConfigureAgentResponse
/** 
 * The structure representing the configureAgentResponse.
**/
export class ConfigureAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration: AgentConfiguration;
}

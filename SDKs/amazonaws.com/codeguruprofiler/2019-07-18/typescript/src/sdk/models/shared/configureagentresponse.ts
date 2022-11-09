import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AgentConfiguration } from "./agentconfiguration";


// ConfigureAgentResponse
/** 
 * The structure representing the configureAgentResponse.
**/
export class ConfigureAgentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration: AgentConfiguration;
}

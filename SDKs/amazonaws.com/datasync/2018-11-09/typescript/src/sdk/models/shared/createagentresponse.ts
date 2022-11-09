import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateAgentResponse
/** 
 * CreateAgentResponse
**/
export class CreateAgentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentArn" })
  agentArn?: string;
}

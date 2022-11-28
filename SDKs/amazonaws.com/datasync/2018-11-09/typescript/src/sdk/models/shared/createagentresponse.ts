import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateAgentResponse
/** 
 * CreateAgentResponse
**/
export class CreateAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentArn" })
  agentArn?: string;
}

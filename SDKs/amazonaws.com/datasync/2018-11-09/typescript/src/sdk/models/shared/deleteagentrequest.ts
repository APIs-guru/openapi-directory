import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteAgentRequest
/** 
 * DeleteAgentRequest
**/
export class DeleteAgentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentArn" })
  agentArn: string;
}

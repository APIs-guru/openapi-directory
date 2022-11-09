import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateAgentRequest
/** 
 * UpdateAgentRequest
**/
export class UpdateAgentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentArn" })
  agentArn: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}

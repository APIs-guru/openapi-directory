import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteAgentRequest
/** 
 * DeleteAgentRequest
**/
export class DeleteAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentArn" })
  agentArn: string;
}

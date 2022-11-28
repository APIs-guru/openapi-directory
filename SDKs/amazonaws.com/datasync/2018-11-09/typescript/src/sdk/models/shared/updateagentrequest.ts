import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateAgentRequest
/** 
 * UpdateAgentRequest
**/
export class UpdateAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentArn" })
  agentArn: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

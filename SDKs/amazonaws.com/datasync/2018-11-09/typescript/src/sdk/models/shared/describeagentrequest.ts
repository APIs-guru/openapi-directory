import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeAgentRequest
/** 
 * DescribeAgent
**/
export class DescribeAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentArn" })
  agentArn: string;
}

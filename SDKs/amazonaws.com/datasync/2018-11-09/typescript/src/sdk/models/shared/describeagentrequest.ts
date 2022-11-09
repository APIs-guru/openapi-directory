import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeAgentRequest
/** 
 * DescribeAgent
**/
export class DescribeAgentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentArn" })
  agentArn: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentInfo } from "./agentinfo";



export class DescribeAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentsInfo", elemType: AgentInfo })
  agentsInfo?: AgentInfo[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

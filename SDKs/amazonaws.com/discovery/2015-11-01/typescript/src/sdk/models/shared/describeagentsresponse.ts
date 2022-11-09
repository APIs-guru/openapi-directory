import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AgentInfo } from "./agentinfo";


export class DescribeAgentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentsInfo", elemType: shared.AgentInfo })
  agentsInfo?: AgentInfo[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

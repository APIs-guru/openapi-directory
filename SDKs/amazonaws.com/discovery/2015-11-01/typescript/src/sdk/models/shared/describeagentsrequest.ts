import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";


export class DescribeAgentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentIds" })
  agentIds?: string[];

  @Metadata({ data: "json, name=filters", elemType: shared.Filter })
  filters?: Filter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

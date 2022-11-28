import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";



export class DescribeAgentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentIds" })
  agentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: Filter })
  filters?: Filter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

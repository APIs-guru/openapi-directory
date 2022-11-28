import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterGroup } from "./parametergroup";



export class DescribeParameterGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroups", elemType: ParameterGroup })
  parameterGroups?: ParameterGroup[];
}

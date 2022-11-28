import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetGroup } from "./subnetgroup";



export class DescribeSubnetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetGroups", elemType: SubnetGroup })
  subnetGroups?: SubnetGroup[];
}

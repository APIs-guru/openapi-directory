import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubnetGroup } from "./subnetgroup";


export class DescribeSubnetGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SubnetGroups", elemType: shared.SubnetGroup })
  subnetGroups?: SubnetGroup[];
}

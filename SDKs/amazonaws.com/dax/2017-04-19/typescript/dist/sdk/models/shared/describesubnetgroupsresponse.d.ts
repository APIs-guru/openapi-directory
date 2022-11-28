import { SpeakeasyBase } from "../../../internal/utils";
import { SubnetGroup } from "./subnetgroup";
export declare class DescribeSubnetGroupsResponse extends SpeakeasyBase {
    nextToken?: string;
    subnetGroups?: SubnetGroup[];
}

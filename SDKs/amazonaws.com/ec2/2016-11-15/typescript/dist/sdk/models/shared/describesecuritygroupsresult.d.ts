import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityGroup } from "./securitygroup";
export declare class DescribeSecurityGroupsResult extends SpeakeasyBase {
    nextToken?: string;
    securityGroups?: SecurityGroup[];
}

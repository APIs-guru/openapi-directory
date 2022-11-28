import { SpeakeasyBase } from "../../../internal/utils";
import { StaleSecurityGroup } from "./stalesecuritygroup";
export declare class DescribeStaleSecurityGroupsResult extends SpeakeasyBase {
    nextToken?: string;
    staleSecurityGroupSet?: StaleSecurityGroup[];
}

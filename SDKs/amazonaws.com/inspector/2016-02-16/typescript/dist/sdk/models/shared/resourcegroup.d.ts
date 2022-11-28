import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceGroupTag } from "./resourcegrouptag";
/**
 * Contains information about a resource group. The resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target. This data type is used as the response element in the <a>DescribeResourceGroups</a> action.
**/
export declare class ResourceGroup extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    tags: ResourceGroupTag[];
}

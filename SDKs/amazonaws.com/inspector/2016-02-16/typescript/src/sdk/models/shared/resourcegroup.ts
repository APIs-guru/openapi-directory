import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceGroupTag } from "./resourcegrouptag";



// ResourceGroup
/** 
 * Contains information about a resource group. The resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target. This data type is used as the response element in the <a>DescribeResourceGroups</a> action.
**/
export class ResourceGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: ResourceGroupTag })
  tags: ResourceGroupTag[];
}

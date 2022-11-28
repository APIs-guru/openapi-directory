import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeResourceGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceGroupArns" })
  resourceGroupArns: string[];
}

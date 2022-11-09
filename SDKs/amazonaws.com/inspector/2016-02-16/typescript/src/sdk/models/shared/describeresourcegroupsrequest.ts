import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeResourceGroupsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceGroupArns" })
  resourceGroupArns: string[];
}

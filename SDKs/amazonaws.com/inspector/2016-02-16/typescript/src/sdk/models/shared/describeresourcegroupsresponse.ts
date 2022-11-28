import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedItemDetails } from "./faileditemdetails";
import { ResourceGroup } from "./resourcegroup";



export class DescribeResourceGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedItems", elemType: FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;

  @SpeakeasyMetadata({ data: "json, name=resourceGroups", elemType: ResourceGroup })
  resourceGroups: ResourceGroup[];
}

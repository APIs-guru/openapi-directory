import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedItemDetails } from "./faileditemdetails";
import { ResourceGroup } from "./resourcegroup";


export class DescribeResourceGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedItems", elemType: shared.FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;

  @Metadata({ data: "json, name=resourceGroups", elemType: shared.ResourceGroup })
  resourceGroups: ResourceGroup[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Exclusion } from "./exclusion";
import { FailedItemDetails } from "./faileditemdetails";



export class DescribeExclusionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclusions", elemType: Exclusion })
  exclusions: Map<string, Exclusion>;

  @SpeakeasyMetadata({ data: "json, name=failedItems", elemType: FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;
}

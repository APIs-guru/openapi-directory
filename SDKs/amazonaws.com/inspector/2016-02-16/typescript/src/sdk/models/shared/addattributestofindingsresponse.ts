import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedItemDetails } from "./faileditemdetails";



export class AddAttributesToFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedItems", elemType: FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;
}

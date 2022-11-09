import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedItemDetails } from "./faileditemdetails";


export class AddAttributesToFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedItems", elemType: shared.FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;
}

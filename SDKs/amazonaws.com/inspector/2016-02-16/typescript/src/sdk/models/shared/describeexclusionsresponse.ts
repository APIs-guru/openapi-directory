import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Exclusion } from "./exclusion";
import { FailedItemDetails } from "./faileditemdetails";


export class DescribeExclusionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclusions", elemType: shared.Exclusion })
  exclusions: Map<string, Exclusion>;

  @Metadata({ data: "json, name=failedItems", elemType: shared.FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedItemDetails } from "./faileditemdetails";
import { Finding } from "./finding";


export class DescribeFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedItems", elemType: shared.FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;

  @Metadata({ data: "json, name=findings", elemType: shared.Finding })
  findings: Finding[];
}

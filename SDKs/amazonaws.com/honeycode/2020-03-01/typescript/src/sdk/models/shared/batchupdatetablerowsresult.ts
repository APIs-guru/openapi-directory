import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedBatchItem } from "./failedbatchitem";


export class BatchUpdateTableRowsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedBatchItems", elemType: shared.FailedBatchItem })
  failedBatchItems?: FailedBatchItem[];

  @Metadata({ data: "json, name=workbookCursor" })
  workbookCursor: number;
}

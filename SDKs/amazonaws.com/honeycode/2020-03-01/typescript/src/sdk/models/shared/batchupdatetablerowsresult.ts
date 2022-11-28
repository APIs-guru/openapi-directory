import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedBatchItem } from "./failedbatchitem";



export class BatchUpdateTableRowsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedBatchItems", elemType: FailedBatchItem })
  failedBatchItems?: FailedBatchItem[];

  @SpeakeasyMetadata({ data: "json, name=workbookCursor" })
  workbookCursor: number;
}

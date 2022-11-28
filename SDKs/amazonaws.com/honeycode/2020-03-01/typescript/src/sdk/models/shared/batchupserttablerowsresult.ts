import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedBatchItem } from "./failedbatchitem";
import { UpsertRowsResult } from "./upsertrowsresult";



export class BatchUpsertTableRowsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedBatchItems", elemType: FailedBatchItem })
  failedBatchItems?: FailedBatchItem[];

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: UpsertRowsResult })
  rows: Map<string, UpsertRowsResult>;

  @SpeakeasyMetadata({ data: "json, name=workbookCursor" })
  workbookCursor: number;
}

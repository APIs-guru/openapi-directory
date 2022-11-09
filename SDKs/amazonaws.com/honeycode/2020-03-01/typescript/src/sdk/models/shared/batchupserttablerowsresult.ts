import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedBatchItem } from "./failedbatchitem";
import { UpsertRowsResult } from "./upsertrowsresult";


export class BatchUpsertTableRowsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedBatchItems", elemType: shared.FailedBatchItem })
  failedBatchItems?: FailedBatchItem[];

  @Metadata({ data: "json, name=rows", elemType: shared.UpsertRowsResult })
  rows: Map<string, UpsertRowsResult>;

  @Metadata({ data: "json, name=workbookCursor" })
  workbookCursor: number;
}

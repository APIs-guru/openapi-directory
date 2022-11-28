import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableRow } from "./tablerow";



export class ListTableRowsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnIds" })
  columnIds: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rowIdsNotFound" })
  rowIdsNotFound?: string[];

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: TableRow })
  rows: TableRow[];

  @SpeakeasyMetadata({ data: "json, name=workbookCursor" })
  workbookCursor: number;
}

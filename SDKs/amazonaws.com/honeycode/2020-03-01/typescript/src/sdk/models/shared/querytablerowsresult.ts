import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableRow } from "./tablerow";


export class QueryTableRowsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnIds" })
  columnIds: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=rows", elemType: shared.TableRow })
  rows: TableRow[];

  @Metadata({ data: "json, name=workbookCursor" })
  workbookCursor: number;
}

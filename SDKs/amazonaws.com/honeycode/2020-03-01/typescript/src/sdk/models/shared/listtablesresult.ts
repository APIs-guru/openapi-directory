import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Table } from "./table";


export class ListTablesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=tables", elemType: shared.Table })
  tables: Table[];

  @Metadata({ data: "json, name=workbookCursor" })
  workbookCursor?: number;
}

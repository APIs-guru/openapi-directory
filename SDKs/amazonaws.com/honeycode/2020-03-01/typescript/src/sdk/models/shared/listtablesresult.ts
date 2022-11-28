import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";



export class ListTablesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tables", elemType: Table })
  tables: Table[];

  @SpeakeasyMetadata({ data: "json, name=workbookCursor" })
  workbookCursor?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableColumn } from "./tablecolumn";



export class ListTableColumnsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tableColumns", elemType: TableColumn })
  tableColumns: TableColumn[];

  @SpeakeasyMetadata({ data: "json, name=workbookCursor" })
  workbookCursor?: number;
}

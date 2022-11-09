import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableColumn } from "./tablecolumn";


export class ListTableColumnsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=tableColumns", elemType: shared.TableColumn })
  tableColumns: TableColumn[];

  @Metadata({ data: "json, name=workbookCursor" })
  workbookCursor?: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableInput } from "./tableinput";


export class UpdateTableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=SkipArchive" })
  skipArchive?: boolean;

  @Metadata({ data: "json, name=TableInput" })
  tableInput: TableInput;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableInput } from "./tableinput";



export class UpdateTableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=SkipArchive" })
  skipArchive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TableInput" })
  tableInput: TableInput;
}

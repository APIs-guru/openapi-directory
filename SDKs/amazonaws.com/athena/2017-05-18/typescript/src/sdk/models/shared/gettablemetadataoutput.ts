import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableMetadata } from "./tablemetadata";



export class GetTableMetadataOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableMetadata" })
  tableMetadata?: TableMetadata;
}

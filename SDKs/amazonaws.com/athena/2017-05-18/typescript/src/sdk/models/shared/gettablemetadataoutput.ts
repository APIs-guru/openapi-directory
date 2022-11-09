import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableMetadata } from "./tablemetadata";


export class GetTableMetadataOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableMetadata" })
  tableMetadata?: TableMetadata;
}

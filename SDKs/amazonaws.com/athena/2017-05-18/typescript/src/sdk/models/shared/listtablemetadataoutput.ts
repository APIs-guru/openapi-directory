import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableMetadata } from "./tablemetadata";



export class ListTableMetadataOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TableMetadataList", elemType: TableMetadata })
  tableMetadataList?: TableMetadata[];
}

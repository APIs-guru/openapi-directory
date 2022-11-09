import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableMetadata } from "./tablemetadata";


export class ListTableMetadataOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TableMetadataList", elemType: shared.TableMetadata })
  tableMetadataList?: TableMetadata[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaVersionListItem } from "./schemaversionlistitem";



export class ListSchemaVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Schemas", elemType: SchemaVersionListItem })
  schemas?: SchemaVersionListItem[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaVersionErrorItem } from "./schemaversionerroritem";



export class DeleteSchemaVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaVersionErrors", elemType: SchemaVersionErrorItem })
  schemaVersionErrors?: SchemaVersionErrorItem[];
}

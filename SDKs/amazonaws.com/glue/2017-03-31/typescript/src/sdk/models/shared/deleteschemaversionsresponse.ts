import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchemaVersionErrorItem } from "./schemaversionerroritem";


export class DeleteSchemaVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaVersionErrors", elemType: shared.SchemaVersionErrorItem })
  schemaVersionErrors?: SchemaVersionErrorItem[];
}

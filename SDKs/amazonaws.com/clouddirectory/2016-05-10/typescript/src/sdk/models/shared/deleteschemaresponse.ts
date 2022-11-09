import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSchemaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;
}

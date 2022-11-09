import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSchemaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;
}

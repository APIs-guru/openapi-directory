import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSchemaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;
}

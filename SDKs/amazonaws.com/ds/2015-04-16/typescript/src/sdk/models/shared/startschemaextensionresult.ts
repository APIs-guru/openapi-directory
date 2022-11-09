import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartSchemaExtensionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaExtensionId" })
  schemaExtensionId?: string;
}

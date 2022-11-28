import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartSchemaExtensionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaExtensionId" })
  schemaExtensionId?: string;
}

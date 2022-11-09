import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelSchemaExtensionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=SchemaExtensionId" })
  schemaExtensionId: string;
}

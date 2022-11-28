import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelSchemaExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaExtensionId" })
  schemaExtensionId: string;
}

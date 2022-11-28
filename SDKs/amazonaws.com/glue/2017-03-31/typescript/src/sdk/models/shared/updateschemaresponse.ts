import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaName" })
  schemaName?: string;
}

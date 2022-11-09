import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSchemaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @Metadata({ data: "json, name=SchemaName" })
  schemaName?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveSchemaVersionMetadataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LatestVersion" })
  latestVersion?: boolean;

  @Metadata({ data: "json, name=MetadataKey" })
  metadataKey?: string;

  @Metadata({ data: "json, name=MetadataValue" })
  metadataValue?: string;

  @Metadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @Metadata({ data: "json, name=SchemaName" })
  schemaName?: string;

  @Metadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @Metadata({ data: "json, name=VersionNumber" })
  versionNumber?: number;
}

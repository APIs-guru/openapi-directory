import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveSchemaVersionMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LatestVersion" })
  latestVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MetadataKey" })
  metadataKey?: string;

  @SpeakeasyMetadata({ data: "json, name=MetadataValue" })
  metadataValue?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaName" })
  schemaName?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionNumber" })
  versionNumber?: number;
}

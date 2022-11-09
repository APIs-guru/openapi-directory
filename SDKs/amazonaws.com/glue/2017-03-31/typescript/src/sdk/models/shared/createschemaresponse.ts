import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompatibilityEnum } from "./compatibilityenum";
import { DataFormatEnum } from "./dataformatenum";
import { SchemaStatusEnum } from "./schemastatusenum";
import { SchemaVersionStatusEnum } from "./schemaversionstatusenum";


export class CreateSchemaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Compatibility" })
  compatibility?: CompatibilityEnum;

  @Metadata({ data: "json, name=DataFormat" })
  dataFormat?: DataFormatEnum;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LatestSchemaVersion" })
  latestSchemaVersion?: number;

  @Metadata({ data: "json, name=NextSchemaVersion" })
  nextSchemaVersion?: number;

  @Metadata({ data: "json, name=RegistryArn" })
  registryArn?: string;

  @Metadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @Metadata({ data: "json, name=SchemaCheckpoint" })
  schemaCheckpoint?: number;

  @Metadata({ data: "json, name=SchemaName" })
  schemaName?: string;

  @Metadata({ data: "json, name=SchemaStatus" })
  schemaStatus?: SchemaStatusEnum;

  @Metadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @Metadata({ data: "json, name=SchemaVersionStatus" })
  schemaVersionStatus?: SchemaVersionStatusEnum;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}

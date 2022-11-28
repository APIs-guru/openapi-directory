import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompatibilityEnum } from "./compatibilityenum";
import { DataFormatEnum } from "./dataformatenum";
import { SchemaStatusEnum } from "./schemastatusenum";



export class GetSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Compatibility" })
  compatibility?: CompatibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=DataFormat" })
  dataFormat?: DataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestSchemaVersion" })
  latestSchemaVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=NextSchemaVersion" })
  nextSchemaVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=RegistryArn" })
  registryArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaCheckpoint" })
  schemaCheckpoint?: number;

  @SpeakeasyMetadata({ data: "json, name=SchemaName" })
  schemaName?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaStatus" })
  schemaStatus?: SchemaStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdatedTime" })
  updatedTime?: string;
}

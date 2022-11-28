import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompatibilityEnum } from "./compatibilityenum";
import { DataFormatEnum } from "./dataformatenum";
import { RegistryId } from "./registryid";



export class CreateSchemaInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Compatibility" })
  compatibility?: CompatibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=DataFormat" })
  dataFormat: DataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistryId" })
  registryId?: RegistryId;

  @SpeakeasyMetadata({ data: "json, name=SchemaDefinition" })
  schemaDefinition?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaName" })
  schemaName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}

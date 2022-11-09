import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompatibilityEnum } from "./compatibilityenum";
import { DataFormatEnum } from "./dataformatenum";
import { RegistryId } from "./registryid";


export class CreateSchemaInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Compatibility" })
  compatibility?: CompatibilityEnum;

  @Metadata({ data: "json, name=DataFormat" })
  dataFormat: DataFormatEnum;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=RegistryId" })
  registryId?: RegistryId;

  @Metadata({ data: "json, name=SchemaDefinition" })
  schemaDefinition?: string;

  @Metadata({ data: "json, name=SchemaName" })
  schemaName: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}

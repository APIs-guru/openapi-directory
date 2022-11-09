import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataFormatEnum } from "./dataformatenum";


export class CheckSchemaVersionValidityInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataFormat" })
  dataFormat: DataFormatEnum;

  @Metadata({ data: "json, name=SchemaDefinition" })
  schemaDefinition: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataFormatEnum } from "./dataformatenum";



export class CheckSchemaVersionValidityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataFormat" })
  dataFormat: DataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=SchemaDefinition" })
  schemaDefinition: string;
}

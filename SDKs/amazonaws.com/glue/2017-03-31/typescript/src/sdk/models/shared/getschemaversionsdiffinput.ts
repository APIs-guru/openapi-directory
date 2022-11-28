import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaVersionNumber } from "./schemaversionnumber";
import { SchemaDiffTypeEnum } from "./schemadifftypeenum";
import { SchemaId } from "./schemaid";



export class GetSchemaVersionsDiffInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirstSchemaVersionNumber" })
  firstSchemaVersionNumber: SchemaVersionNumber;

  @SpeakeasyMetadata({ data: "json, name=SchemaDiffType" })
  schemaDiffType: SchemaDiffTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SchemaId" })
  schemaId: SchemaId;

  @SpeakeasyMetadata({ data: "json, name=SecondSchemaVersionNumber" })
  secondSchemaVersionNumber: SchemaVersionNumber;
}

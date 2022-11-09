import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaVersionNumber } from "./schemaversionnumber";
import { SchemaDiffTypeEnum } from "./schemadifftypeenum";
import { SchemaId } from "./schemaid";
import { SchemaVersionNumber } from "./schemaversionnumber";


export class GetSchemaVersionsDiffInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirstSchemaVersionNumber" })
  firstSchemaVersionNumber: SchemaVersionNumber;

  @Metadata({ data: "json, name=SchemaDiffType" })
  schemaDiffType: SchemaDiffTypeEnum;

  @Metadata({ data: "json, name=SchemaId" })
  schemaId: SchemaId;

  @Metadata({ data: "json, name=SecondSchemaVersionNumber" })
  secondSchemaVersionNumber: SchemaVersionNumber;
}

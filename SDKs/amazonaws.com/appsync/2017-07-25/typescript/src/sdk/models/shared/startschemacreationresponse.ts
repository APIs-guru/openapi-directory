import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaStatusEnum } from "./schemastatusenum";


export class StartSchemaCreationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: SchemaStatusEnum;
}

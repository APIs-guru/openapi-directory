import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaStatusEnum } from "./schemastatusenum";



export class StartSchemaCreationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SchemaStatusEnum;
}

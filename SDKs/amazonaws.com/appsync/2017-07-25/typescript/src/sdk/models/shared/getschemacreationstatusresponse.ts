import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaStatusEnum } from "./schemastatusenum";



export class GetSchemaCreationStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SchemaStatusEnum;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaStatusEnum } from "./schemastatusenum";


export class GetSchemaCreationStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=status" })
  status?: SchemaStatusEnum;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaStatusEnum } from "./schemastatusenum";


export class DeleteSchemaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @Metadata({ data: "json, name=SchemaName" })
  schemaName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: SchemaStatusEnum;
}

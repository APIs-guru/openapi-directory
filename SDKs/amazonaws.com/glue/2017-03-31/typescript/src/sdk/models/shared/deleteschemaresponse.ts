import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaStatusEnum } from "./schemastatusenum";



export class DeleteSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaName" })
  schemaName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: SchemaStatusEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;
}

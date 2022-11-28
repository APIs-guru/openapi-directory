import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;
}

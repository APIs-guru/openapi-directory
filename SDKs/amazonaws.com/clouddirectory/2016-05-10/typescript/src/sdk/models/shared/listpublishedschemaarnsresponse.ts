import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListPublishedSchemaArnsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaArns" })
  schemaArns?: string[];
}

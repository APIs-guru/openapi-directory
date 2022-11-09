import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListPublishedSchemaArnsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SchemaArns" })
  schemaArns?: string[];
}

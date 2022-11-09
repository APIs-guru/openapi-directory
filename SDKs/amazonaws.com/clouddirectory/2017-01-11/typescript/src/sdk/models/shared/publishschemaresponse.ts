import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PublishSchemaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PublishedSchemaArn" })
  publishedSchemaArn?: string;
}

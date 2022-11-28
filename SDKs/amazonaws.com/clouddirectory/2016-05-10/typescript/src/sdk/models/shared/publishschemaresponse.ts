import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PublishSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PublishedSchemaArn" })
  publishedSchemaArn?: string;
}

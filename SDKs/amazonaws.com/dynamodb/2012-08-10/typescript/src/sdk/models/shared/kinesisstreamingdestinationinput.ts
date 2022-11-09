import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KinesisStreamingDestinationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StreamArn" })
  streamArn: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}

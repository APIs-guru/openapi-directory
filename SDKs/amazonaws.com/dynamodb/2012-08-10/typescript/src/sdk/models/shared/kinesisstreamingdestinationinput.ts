import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KinesisStreamingDestinationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StreamArn" })
  streamArn: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}

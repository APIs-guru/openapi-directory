import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationStatusEnum } from "./destinationstatusenum";



export class KinesisStreamingDestinationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationStatus" })
  destinationStatus?: DestinationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StreamArn" })
  streamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;
}

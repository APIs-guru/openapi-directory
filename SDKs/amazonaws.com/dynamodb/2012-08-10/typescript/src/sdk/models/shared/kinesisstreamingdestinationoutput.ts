import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationStatusEnum } from "./destinationstatusenum";


export class KinesisStreamingDestinationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationStatus" })
  destinationStatus?: DestinationStatusEnum;

  @Metadata({ data: "json, name=StreamArn" })
  streamArn?: string;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;
}

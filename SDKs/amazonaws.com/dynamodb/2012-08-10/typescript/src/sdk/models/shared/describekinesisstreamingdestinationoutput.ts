import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KinesisDataStreamDestination } from "./kinesisdatastreamdestination";



export class DescribeKinesisStreamingDestinationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KinesisDataStreamDestinations", elemType: KinesisDataStreamDestination })
  kinesisDataStreamDestinations?: KinesisDataStreamDestination[];

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;
}

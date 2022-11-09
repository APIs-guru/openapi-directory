import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KinesisDataStreamDestination } from "./kinesisdatastreamdestination";


export class DescribeKinesisStreamingDestinationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=KinesisDataStreamDestinations", elemType: shared.KinesisDataStreamDestination })
  kinesisDataStreamDestinations?: KinesisDataStreamDestination[];

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;
}

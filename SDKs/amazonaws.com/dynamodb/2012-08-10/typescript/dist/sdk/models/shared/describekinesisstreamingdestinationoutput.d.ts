import { SpeakeasyBase } from "../../../internal/utils";
import { KinesisDataStreamDestination } from "./kinesisdatastreamdestination";
export declare class DescribeKinesisStreamingDestinationOutput extends SpeakeasyBase {
    kinesisDataStreamDestinations?: KinesisDataStreamDestination[];
    tableName?: string;
}

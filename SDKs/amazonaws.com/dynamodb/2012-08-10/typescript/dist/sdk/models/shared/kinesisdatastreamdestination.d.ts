import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationStatusEnum } from "./destinationstatusenum";
/**
 * Describes a Kinesis data stream destination.
**/
export declare class KinesisDataStreamDestination extends SpeakeasyBase {
    destinationStatus?: DestinationStatusEnum;
    destinationStatusDescription?: string;
    streamArn?: string;
}

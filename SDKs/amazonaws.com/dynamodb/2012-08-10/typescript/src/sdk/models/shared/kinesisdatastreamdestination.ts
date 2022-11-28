import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationStatusEnum } from "./destinationstatusenum";



// KinesisDataStreamDestination
/** 
 * Describes a Kinesis data stream destination.
**/
export class KinesisDataStreamDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationStatus" })
  destinationStatus?: DestinationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=DestinationStatusDescription" })
  destinationStatusDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamArn" })
  streamArn?: string;
}

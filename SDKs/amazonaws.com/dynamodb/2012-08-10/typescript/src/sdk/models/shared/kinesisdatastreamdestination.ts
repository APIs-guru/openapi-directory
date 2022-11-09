import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationStatusEnum } from "./destinationstatusenum";


// KinesisDataStreamDestination
/** 
 * Describes a Kinesis data stream destination.
**/
export class KinesisDataStreamDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationStatus" })
  destinationStatus?: DestinationStatusEnum;

  @Metadata({ data: "json, name=DestinationStatusDescription" })
  destinationStatusDescription?: string;

  @Metadata({ data: "json, name=StreamArn" })
  streamArn?: string;
}

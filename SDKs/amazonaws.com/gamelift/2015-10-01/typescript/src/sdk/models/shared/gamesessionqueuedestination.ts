import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GameSessionQueueDestination
/** 
 * <p>A fleet or alias designated in a game session queue. Queues fulfill requests for new game sessions by placing a new game session on any of the queue's destinations. </p> <p>Destinations are part of a <a>GameSessionQueue</a>.</p>
**/
export class GameSessionQueueDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationArn" })
  destinationArn?: string;
}

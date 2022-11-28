import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameSessionQueue } from "./gamesessionqueue";



// DescribeGameSessionQueuesOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeGameSessionQueuesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSessionQueues", elemType: GameSessionQueue })
  gameSessionQueues?: GameSessionQueue[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

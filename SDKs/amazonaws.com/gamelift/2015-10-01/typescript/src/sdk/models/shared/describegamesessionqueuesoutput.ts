import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GameSessionQueue } from "./gamesessionqueue";


// DescribeGameSessionQueuesOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeGameSessionQueuesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSessionQueues", elemType: shared.GameSessionQueue })
  gameSessionQueues?: GameSessionQueue[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

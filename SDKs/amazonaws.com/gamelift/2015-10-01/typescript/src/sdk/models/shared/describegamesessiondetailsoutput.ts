import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameSessionDetail } from "./gamesessiondetail";



// DescribeGameSessionDetailsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeGameSessionDetailsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSessionDetails", elemType: GameSessionDetail })
  gameSessionDetails?: GameSessionDetail[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

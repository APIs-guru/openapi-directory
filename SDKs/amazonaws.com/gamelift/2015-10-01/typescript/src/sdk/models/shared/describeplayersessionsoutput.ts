import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayerSession } from "./playersession";



// DescribePlayerSessionsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribePlayerSessionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerSessions", elemType: PlayerSession })
  playerSessions?: PlayerSession[];
}

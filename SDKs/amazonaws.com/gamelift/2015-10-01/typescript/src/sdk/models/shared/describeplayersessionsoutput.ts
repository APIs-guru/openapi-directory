import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlayerSession } from "./playersession";


// DescribePlayerSessionsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribePlayerSessionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PlayerSessions", elemType: shared.PlayerSession })
  playerSessions?: PlayerSession[];
}

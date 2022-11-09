import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GameSessionDetail } from "./gamesessiondetail";


// DescribeGameSessionDetailsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeGameSessionDetailsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSessionDetails", elemType: shared.GameSessionDetail })
  gameSessionDetails?: GameSessionDetail[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

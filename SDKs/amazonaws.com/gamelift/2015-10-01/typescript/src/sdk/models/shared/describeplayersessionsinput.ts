import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribePlayerSessionsInput
/** 
 * Represents the input for a request operation.
**/
export class DescribePlayerSessionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSessionId" })
  gameSessionId?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PlayerId" })
  playerId?: string;

  @Metadata({ data: "json, name=PlayerSessionId" })
  playerSessionId?: string;

  @Metadata({ data: "json, name=PlayerSessionStatusFilter" })
  playerSessionStatusFilter?: string;
}

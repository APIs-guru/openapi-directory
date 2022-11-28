import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribePlayerSessionsInput
/** 
 * Represents the input for a request operation.
**/
export class DescribePlayerSessionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSessionId" })
  gameSessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerId" })
  playerId?: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerSessionId" })
  playerSessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerSessionStatusFilter" })
  playerSessionStatusFilter?: string;
}

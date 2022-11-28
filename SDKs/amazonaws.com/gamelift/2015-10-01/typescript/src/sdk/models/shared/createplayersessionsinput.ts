import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreatePlayerSessionsInput
/** 
 * Represents the input for a request operation.
**/
export class CreatePlayerSessionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSessionId" })
  gameSessionId: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerDataMap" })
  playerDataMap?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=PlayerIds" })
  playerIds: string[];
}

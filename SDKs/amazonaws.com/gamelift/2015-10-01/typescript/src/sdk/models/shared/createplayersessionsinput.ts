import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreatePlayerSessionsInput
/** 
 * Represents the input for a request operation.
**/
export class CreatePlayerSessionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSessionId" })
  gameSessionId: string;

  @Metadata({ data: "json, name=PlayerDataMap" })
  playerDataMap?: Map<string, string>;

  @Metadata({ data: "json, name=PlayerIds" })
  playerIds: string[];
}

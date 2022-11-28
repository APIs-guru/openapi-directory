import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GameProperty
/** 
 * Set of key-value pairs that contain information about a game session. When included in a game session request, these properties communicate details to be used when setting up the new game session. For example, a game property might specify a game mode, level, or map. Game properties are passed to the game server process when initiating a new game session. For more information, see the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-create"> GameLift Developer Guide</a>.
**/
export class GameProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}

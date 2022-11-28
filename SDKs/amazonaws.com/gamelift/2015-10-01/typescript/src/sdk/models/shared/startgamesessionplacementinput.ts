import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DesiredPlayerSession } from "./desiredplayersession";
import { GameProperty } from "./gameproperty";
import { PlayerLatency } from "./playerlatency";



// StartGameSessionPlacementInput
/** 
 * Represents the input for a request operation.
**/
export class StartGameSessionPlacementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DesiredPlayerSessions", elemType: DesiredPlayerSession })
  desiredPlayerSessions?: DesiredPlayerSession[];

  @SpeakeasyMetadata({ data: "json, name=GameProperties", elemType: GameProperty })
  gameProperties?: GameProperty[];

  @SpeakeasyMetadata({ data: "json, name=GameSessionData" })
  gameSessionData?: string;

  @SpeakeasyMetadata({ data: "json, name=GameSessionName" })
  gameSessionName?: string;

  @SpeakeasyMetadata({ data: "json, name=GameSessionQueueName" })
  gameSessionQueueName: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumPlayerSessionCount" })
  maximumPlayerSessionCount: number;

  @SpeakeasyMetadata({ data: "json, name=PlacementId" })
  placementId: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerLatencies", elemType: PlayerLatency })
  playerLatencies?: PlayerLatency[];
}

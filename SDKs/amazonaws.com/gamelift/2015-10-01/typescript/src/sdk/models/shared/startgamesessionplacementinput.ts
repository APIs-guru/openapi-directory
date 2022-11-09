import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DesiredPlayerSession } from "./desiredplayersession";
import { GameProperty } from "./gameproperty";
import { PlayerLatency } from "./playerlatency";


// StartGameSessionPlacementInput
/** 
 * Represents the input for a request operation.
**/
export class StartGameSessionPlacementInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DesiredPlayerSessions", elemType: shared.DesiredPlayerSession })
  desiredPlayerSessions?: DesiredPlayerSession[];

  @Metadata({ data: "json, name=GameProperties", elemType: shared.GameProperty })
  gameProperties?: GameProperty[];

  @Metadata({ data: "json, name=GameSessionData" })
  gameSessionData?: string;

  @Metadata({ data: "json, name=GameSessionName" })
  gameSessionName?: string;

  @Metadata({ data: "json, name=GameSessionQueueName" })
  gameSessionQueueName: string;

  @Metadata({ data: "json, name=MaximumPlayerSessionCount" })
  maximumPlayerSessionCount: number;

  @Metadata({ data: "json, name=PlacementId" })
  placementId: string;

  @Metadata({ data: "json, name=PlayerLatencies", elemType: shared.PlayerLatency })
  playerLatencies?: PlayerLatency[];
}

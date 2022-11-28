import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameProperty } from "./gameproperty";



// CreateGameSessionInput
/** 
 * Represents the input for a request operation.
**/
export class CreateGameSessionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasId" })
  aliasId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatorId" })
  creatorId?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=GameProperties", elemType: GameProperty })
  gameProperties?: GameProperty[];

  @SpeakeasyMetadata({ data: "json, name=GameSessionData" })
  gameSessionData?: string;

  @SpeakeasyMetadata({ data: "json, name=GameSessionId" })
  gameSessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumPlayerSessionCount" })
  maximumPlayerSessionCount: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

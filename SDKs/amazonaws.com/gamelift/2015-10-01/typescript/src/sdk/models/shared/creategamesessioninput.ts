import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GameProperty } from "./gameproperty";


// CreateGameSessionInput
/** 
 * Represents the input for a request operation.
**/
export class CreateGameSessionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasId" })
  aliasId?: string;

  @Metadata({ data: "json, name=CreatorId" })
  creatorId?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=GameProperties", elemType: shared.GameProperty })
  gameProperties?: GameProperty[];

  @Metadata({ data: "json, name=GameSessionData" })
  gameSessionData?: string;

  @Metadata({ data: "json, name=GameSessionId" })
  gameSessionId?: string;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=MaximumPlayerSessionCount" })
  maximumPlayerSessionCount: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}

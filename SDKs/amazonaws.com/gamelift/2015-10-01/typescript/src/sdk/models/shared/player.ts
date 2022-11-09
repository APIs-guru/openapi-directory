import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


// Player
/** 
 * Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed.
**/
export class Player extends SpeakeasyBase {
  @Metadata({ data: "json, name=LatencyInMs" })
  latencyInMs?: Map<string, number>;

  @Metadata({ data: "json, name=PlayerAttributes", elemType: shared.AttributeValue })
  playerAttributes?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=PlayerId" })
  playerId?: string;

  @Metadata({ data: "json, name=Team" })
  team?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// Player
/** 
 * Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed.
**/
export class Player extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LatencyInMs" })
  latencyInMs?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=PlayerAttributes", elemType: AttributeValue })
  playerAttributes?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=PlayerId" })
  playerId?: string;

  @SpeakeasyMetadata({ data: "json, name=Team" })
  team?: string;
}

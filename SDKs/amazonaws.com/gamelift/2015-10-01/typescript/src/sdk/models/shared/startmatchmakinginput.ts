import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";



// StartMatchmakingInput
/** 
 * Represents the input for a request operation.
**/
export class StartMatchmakingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationName" })
  configurationName: string;

  @SpeakeasyMetadata({ data: "json, name=Players", elemType: Player })
  players: Player[];

  @SpeakeasyMetadata({ data: "json, name=TicketId" })
  ticketId?: string;
}

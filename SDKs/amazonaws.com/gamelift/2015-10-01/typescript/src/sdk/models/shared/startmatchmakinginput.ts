import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Player } from "./player";


// StartMatchmakingInput
/** 
 * Represents the input for a request operation.
**/
export class StartMatchmakingInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationName" })
  configurationName: string;

  @Metadata({ data: "json, name=Players", elemType: shared.Player })
  players: Player[];

  @Metadata({ data: "json, name=TicketId" })
  ticketId?: string;
}

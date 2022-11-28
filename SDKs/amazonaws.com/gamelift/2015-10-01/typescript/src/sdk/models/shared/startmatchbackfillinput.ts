import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";



// StartMatchBackfillInput
/** 
 * Represents the input for a request operation.
**/
export class StartMatchBackfillInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationName" })
  configurationName: string;

  @SpeakeasyMetadata({ data: "json, name=GameSessionArn" })
  gameSessionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Players", elemType: Player })
  players: Player[];

  @SpeakeasyMetadata({ data: "json, name=TicketId" })
  ticketId?: string;
}

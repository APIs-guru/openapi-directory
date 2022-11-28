import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopMatchmakingInput
/** 
 * Represents the input for a request operation.
**/
export class StopMatchmakingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TicketId" })
  ticketId: string;
}

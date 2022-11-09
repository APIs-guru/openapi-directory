import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopMatchmakingInput
/** 
 * Represents the input for a request operation.
**/
export class StopMatchmakingInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TicketId" })
  ticketId: string;
}

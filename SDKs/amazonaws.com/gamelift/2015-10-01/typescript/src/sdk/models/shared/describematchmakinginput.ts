import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeMatchmakingInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeMatchmakingInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TicketIds" })
  ticketIds: string[];
}

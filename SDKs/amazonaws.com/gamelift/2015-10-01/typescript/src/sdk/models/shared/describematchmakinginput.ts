import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeMatchmakingInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeMatchmakingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TicketIds" })
  ticketIds: string[];
}

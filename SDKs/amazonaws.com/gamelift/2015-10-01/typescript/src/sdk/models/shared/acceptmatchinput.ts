import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AcceptanceTypeEnum } from "./acceptancetypeenum";


// AcceptMatchInput
/** 
 * Represents the input for a request operation.
**/
export class AcceptMatchInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptanceType" })
  acceptanceType: AcceptanceTypeEnum;

  @Metadata({ data: "json, name=PlayerIds" })
  playerIds: string[];

  @Metadata({ data: "json, name=TicketId" })
  ticketId: string;
}

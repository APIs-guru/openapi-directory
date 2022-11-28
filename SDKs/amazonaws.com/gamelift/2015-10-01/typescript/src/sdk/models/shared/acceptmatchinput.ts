import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcceptanceTypeEnum } from "./acceptancetypeenum";



// AcceptMatchInput
/** 
 * Represents the input for a request operation.
**/
export class AcceptMatchInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptanceType" })
  acceptanceType: AcceptanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PlayerIds" })
  playerIds: string[];

  @SpeakeasyMetadata({ data: "json, name=TicketId" })
  ticketId: string;
}

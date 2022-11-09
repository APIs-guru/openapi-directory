import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventSourceStateEnum } from "./eventsourcestateenum";


// PartnerEventSourceAccount
/** 
 * The Amazon Web Services account that a partner event source has been offered to.
**/
export class PartnerEventSourceAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Account" })
  account?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=ExpirationTime" })
  expirationTime?: Date;

  @Metadata({ data: "json, name=State" })
  state?: EventSourceStateEnum;
}

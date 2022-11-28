import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSourceStateEnum } from "./eventsourcestateenum";



// PartnerEventSourceAccount
/** 
 * The Amazon Web Services account that a partner event source has been offered to.
**/
export class PartnerEventSourceAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExpirationTime" })
  expirationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: EventSourceStateEnum;
}

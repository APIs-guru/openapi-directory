import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeValuesEnum } from "./currencycodevaluesenum";
import { PaymentOptionEnum } from "./paymentoptionenum";
import { ReservationStateEnum } from "./reservationstateenum";
import { Tag } from "./tag";



// HostReservation
/** 
 * Details about the Dedicated Host Reservation and associated Dedicated Hosts.
**/
export class HostReservation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  count?: number;

  @SpeakeasyMetadata()
  currencyCode?: CurrencyCodeValuesEnum;

  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  end?: Date;

  @SpeakeasyMetadata()
  hostIdSet?: string[];

  @SpeakeasyMetadata()
  hostReservationId?: string;

  @SpeakeasyMetadata()
  hourlyPrice?: string;

  @SpeakeasyMetadata()
  instanceFamily?: string;

  @SpeakeasyMetadata()
  offeringId?: string;

  @SpeakeasyMetadata()
  paymentOption?: PaymentOptionEnum;

  @SpeakeasyMetadata()
  start?: Date;

  @SpeakeasyMetadata()
  state?: ReservationStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  upfrontPrice?: string;
}

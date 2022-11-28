import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeValuesEnum } from "./currencycodevaluesenum";
import { PaymentOptionEnum } from "./paymentoptionenum";



// Purchase
/** 
 * Describes the result of the purchase.
**/
export class Purchase extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currencyCode?: CurrencyCodeValuesEnum;

  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  hostIdSet?: string[];

  @SpeakeasyMetadata()
  hostReservationId?: string;

  @SpeakeasyMetadata()
  hourlyPrice?: string;

  @SpeakeasyMetadata()
  instanceFamily?: string;

  @SpeakeasyMetadata()
  paymentOption?: PaymentOptionEnum;

  @SpeakeasyMetadata()
  upfrontPrice?: string;
}

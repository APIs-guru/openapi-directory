import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeValuesEnum } from "./currencycodevaluesenum";
import { PaymentOptionEnum } from "./paymentoptionenum";



// HostOffering
/** 
 * Details about the Dedicated Host Reservation offering.
**/
export class HostOffering extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currencyCode?: CurrencyCodeValuesEnum;

  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  hourlyPrice?: string;

  @SpeakeasyMetadata()
  instanceFamily?: string;

  @SpeakeasyMetadata()
  offeringId?: string;

  @SpeakeasyMetadata()
  paymentOption?: PaymentOptionEnum;

  @SpeakeasyMetadata()
  upfrontPrice?: string;
}

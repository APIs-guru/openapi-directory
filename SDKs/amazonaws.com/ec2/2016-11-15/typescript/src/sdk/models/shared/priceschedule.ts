import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeValuesEnum } from "./currencycodevaluesenum";



// PriceSchedule
/** 
 * Describes the price for a Reserved Instance.
**/
export class PriceSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  active?: boolean;

  @SpeakeasyMetadata()
  currencyCode?: CurrencyCodeValuesEnum;

  @SpeakeasyMetadata()
  price?: number;

  @SpeakeasyMetadata()
  term?: number;
}

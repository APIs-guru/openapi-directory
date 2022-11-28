import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";



// MonetaryAmount
/** 
 * A number that represents the monetary amount for an offering or transaction.
**/
export class MonetaryAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: CurrencyCodeEnum;
}

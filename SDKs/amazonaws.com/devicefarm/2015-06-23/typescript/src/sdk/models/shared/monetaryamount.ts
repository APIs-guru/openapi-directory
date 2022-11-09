import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";


// MonetaryAmount
/** 
 * A number that represents the monetary amount for an offering or transaction.
**/
export class MonetaryAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: CurrencyCodeEnum;
}

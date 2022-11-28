import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Spend } from "./spend";



// CalculatedSpend
/** 
 * <p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, RI units, or Savings Plans units and the <code>forecastedSpend</code> tracks how much you are predicted to spend based on your historical usage profile.</p> <p>For example, if it is the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p>
**/
export class CalculatedSpend extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActualSpend" })
  actualSpend: Spend;

  @SpeakeasyMetadata({ data: "json, name=ForecastedSpend" })
  forecastedSpend?: Spend;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EvaluationParameters
/** 
 * Parameters that define how to split a dataset into training data and testing data, and the number of iterations to perform. These parameters are specified in the predefined algorithms but you can override them in the <a>CreatePredictor</a> request.
**/
export class EvaluationParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackTestWindowOffset" })
  backTestWindowOffset?: number;

  @Metadata({ data: "json, name=NumberOfBacktestWindows" })
  numberOfBacktestWindows?: number;
}

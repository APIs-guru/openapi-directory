import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters that define how to split a dataset into training data and testing data, and the number of iterations to perform. These parameters are specified in the predefined algorithms but you can override them in the <a>CreatePredictor</a> request.
**/
export declare class EvaluationParameters extends SpeakeasyBase {
    backTestWindowOffset?: number;
    numberOfBacktestWindows?: number;
}

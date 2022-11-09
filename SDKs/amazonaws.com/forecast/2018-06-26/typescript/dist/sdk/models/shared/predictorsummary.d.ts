import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed <code>PredictorArn</code>.
**/
export declare class PredictorSummary extends SpeakeasyBase {
    creationTime?: Date;
    datasetGroupArn?: string;
    lastModificationTime?: Date;
    message?: string;
    predictorArn?: string;
    predictorName?: string;
    status?: string;
}

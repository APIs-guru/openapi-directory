import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides statistics for each data field imported into to an Amazon Forecast dataset with the <a>CreateDatasetImportJob</a> operation.
**/
export declare class Statistics extends SpeakeasyBase {
    avg?: number;
    count?: number;
    countDistinct?: number;
    countDistinctLong?: number;
    countLong?: number;
    countNan?: number;
    countNanLong?: number;
    countNull?: number;
    countNullLong?: number;
    max?: string;
    min?: string;
    stddev?: number;
}

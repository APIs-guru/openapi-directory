import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the forecast properties used in the <a>ListForecasts</a> operation. To get the complete set of properties, call the <a>DescribeForecast</a> operation, and provide the <code>ForecastArn</code> that is listed in the summary.
**/
export declare class ForecastSummary extends SpeakeasyBase {
    creationTime?: Date;
    datasetGroupArn?: string;
    forecastArn?: string;
    forecastName?: string;
    lastModificationTime?: Date;
    message?: string;
    predictorArn?: string;
    status?: string;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DescribeForecastResponse extends SpeakeasyBase {
    creationTime?: Date;
    datasetGroupArn?: string;
    estimatedTimeRemainingInMinutes?: number;
    forecastArn?: string;
    forecastName?: string;
    forecastTypes?: string[];
    lastModificationTime?: Date;
    message?: string;
    predictorArn?: string;
    status?: string;
}

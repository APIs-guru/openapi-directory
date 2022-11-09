import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class QueryForecastRequest extends SpeakeasyBase {
    endDate?: string;
    filters: Map<string, string>;
    forecastArn: string;
    nextToken?: string;
    startDate?: string;
}

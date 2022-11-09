import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaFunctionRecommendationFilter } from "./lambdafunctionrecommendationfilter";
export declare class GetLambdaFunctionRecommendationsRequest extends SpeakeasyBase {
    accountIds?: string[];
    filters?: LambdaFunctionRecommendationFilter[];
    functionArns?: string[];
    maxResults?: number;
    nextToken?: string;
}

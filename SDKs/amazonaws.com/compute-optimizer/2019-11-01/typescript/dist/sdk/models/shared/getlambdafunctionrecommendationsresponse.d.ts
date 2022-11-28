import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionRecommendation } from "./lambdafunctionrecommendation";
export declare class GetLambdaFunctionRecommendationsResponse extends SpeakeasyBase {
    lambdaFunctionRecommendations?: LambdaFunctionRecommendation[];
    nextToken?: string;
}

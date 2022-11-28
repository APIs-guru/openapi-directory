import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionRecommendationFilter } from "./lambdafunctionrecommendationfilter";



export class GetLambdaFunctionRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: LambdaFunctionRecommendationFilter })
  filters?: LambdaFunctionRecommendationFilter[];

  @SpeakeasyMetadata({ data: "json, name=functionArns" })
  functionArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LambdaFunctionRecommendationFilter } from "./lambdafunctionrecommendationfilter";


export class GetLambdaFunctionRecommendationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountIds" })
  accountIds?: string[];

  @Metadata({ data: "json, name=filters", elemType: shared.LambdaFunctionRecommendationFilter })
  filters?: LambdaFunctionRecommendationFilter[];

  @Metadata({ data: "json, name=functionArns" })
  functionArns?: string[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LambdaFunctionRecommendation } from "./lambdafunctionrecommendation";


export class GetLambdaFunctionRecommendationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=lambdaFunctionRecommendations", elemType: shared.LambdaFunctionRecommendation })
  lambdaFunctionRecommendations?: LambdaFunctionRecommendation[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

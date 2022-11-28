import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionRecommendation } from "./lambdafunctionrecommendation";



export class GetLambdaFunctionRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionRecommendations", elemType: LambdaFunctionRecommendation })
  lambdaFunctionRecommendations?: LambdaFunctionRecommendation[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

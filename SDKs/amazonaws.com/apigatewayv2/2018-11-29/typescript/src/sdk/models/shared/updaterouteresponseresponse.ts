import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterConstraints } from "./parameterconstraints";



export class UpdateRouteResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelSelectionExpression" })
  modelSelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=ResponseModels" })
  responseModels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ResponseParameters", elemType: ParameterConstraints })
  responseParameters?: Map<string, ParameterConstraints>;

  @SpeakeasyMetadata({ data: "json, name=RouteResponseId" })
  routeResponseId?: string;

  @SpeakeasyMetadata({ data: "json, name=RouteResponseKey" })
  routeResponseKey?: string;
}

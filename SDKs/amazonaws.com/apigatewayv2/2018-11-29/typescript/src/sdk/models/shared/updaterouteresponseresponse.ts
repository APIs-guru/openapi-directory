import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterConstraints } from "./parameterconstraints";


export class UpdateRouteResponseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelSelectionExpression" })
  modelSelectionExpression?: string;

  @Metadata({ data: "json, name=ResponseModels" })
  responseModels?: Map<string, string>;

  @Metadata({ data: "json, name=ResponseParameters", elemType: shared.ParameterConstraints })
  responseParameters?: Map<string, ParameterConstraints>;

  @Metadata({ data: "json, name=RouteResponseId" })
  routeResponseId?: string;

  @Metadata({ data: "json, name=RouteResponseKey" })
  routeResponseKey?: string;
}

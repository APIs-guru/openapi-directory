import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterConstraints } from "./parameterconstraints";
export declare class UpdateRouteResponseResponse extends SpeakeasyBase {
    modelSelectionExpression?: string;
    responseModels?: Map<string, string>;
    responseParameters?: Map<string, ParameterConstraints>;
    routeResponseId?: string;
    routeResponseKey?: string;
}

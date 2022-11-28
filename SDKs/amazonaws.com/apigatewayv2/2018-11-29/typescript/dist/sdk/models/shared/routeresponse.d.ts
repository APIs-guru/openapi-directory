import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterConstraints } from "./parameterconstraints";
/**
 * Represents a route response.
**/
export declare class RouteResponse extends SpeakeasyBase {
    modelSelectionExpression?: string;
    responseModels?: Map<string, string>;
    responseParameters?: Map<string, ParameterConstraints>;
    routeResponseId?: string;
    routeResponseKey: string;
}

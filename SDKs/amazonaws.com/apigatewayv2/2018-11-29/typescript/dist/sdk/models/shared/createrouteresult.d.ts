import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationTypeEnum } from "./authorizationtypeenum";
import { ParameterConstraints } from "./parameterconstraints";
export declare class CreateRouteResult extends SpeakeasyBase {
    apiGatewayManaged?: boolean;
    apiKeyRequired?: boolean;
    authorizationScopes?: string[];
    authorizationType?: AuthorizationTypeEnum;
    authorizerId?: string;
    modelSelectionExpression?: string;
    operationName?: string;
    requestModels?: Map<string, string>;
    requestParameters?: Map<string, ParameterConstraints>;
    routeId?: string;
    routeKey?: string;
    routeResponseSelectionExpression?: string;
    target?: string;
}

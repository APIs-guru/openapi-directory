import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationTypeEnum } from "./authorizationtypeenum";
import { ParameterConstraints } from "./parameterconstraints";



export class UpdateRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiGatewayManaged" })
  apiGatewayManaged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ApiKeyRequired" })
  apiKeyRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AuthorizationScopes" })
  authorizationScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=AuthorizationType" })
  authorizationType?: AuthorizationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=AuthorizerId" })
  authorizerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelSelectionExpression" })
  modelSelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=OperationName" })
  operationName?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestModels" })
  requestModels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=RequestParameters", elemType: ParameterConstraints })
  requestParameters?: Map<string, ParameterConstraints>;

  @SpeakeasyMetadata({ data: "json, name=RouteId" })
  routeId?: string;

  @SpeakeasyMetadata({ data: "json, name=RouteKey" })
  routeKey?: string;

  @SpeakeasyMetadata({ data: "json, name=RouteResponseSelectionExpression" })
  routeResponseSelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target?: string;
}

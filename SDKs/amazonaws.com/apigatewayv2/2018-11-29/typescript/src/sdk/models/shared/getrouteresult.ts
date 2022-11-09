import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizationTypeEnum } from "./authorizationtypeenum";
import { ParameterConstraints } from "./parameterconstraints";


export class GetRouteResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiGatewayManaged" })
  apiGatewayManaged?: boolean;

  @Metadata({ data: "json, name=ApiKeyRequired" })
  apiKeyRequired?: boolean;

  @Metadata({ data: "json, name=AuthorizationScopes" })
  authorizationScopes?: string[];

  @Metadata({ data: "json, name=AuthorizationType" })
  authorizationType?: AuthorizationTypeEnum;

  @Metadata({ data: "json, name=AuthorizerId" })
  authorizerId?: string;

  @Metadata({ data: "json, name=ModelSelectionExpression" })
  modelSelectionExpression?: string;

  @Metadata({ data: "json, name=OperationName" })
  operationName?: string;

  @Metadata({ data: "json, name=RequestModels" })
  requestModels?: Map<string, string>;

  @Metadata({ data: "json, name=RequestParameters", elemType: shared.ParameterConstraints })
  requestParameters?: Map<string, ParameterConstraints>;

  @Metadata({ data: "json, name=RouteId" })
  routeId?: string;

  @Metadata({ data: "json, name=RouteKey" })
  routeKey?: string;

  @Metadata({ data: "json, name=RouteResponseSelectionExpression" })
  routeResponseSelectionExpression?: string;

  @Metadata({ data: "json, name=Target" })
  target?: string;
}

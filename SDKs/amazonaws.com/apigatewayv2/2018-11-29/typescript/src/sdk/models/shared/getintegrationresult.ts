import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { ContentHandlingStrategyEnum } from "./contenthandlingstrategyenum";
import { IntegrationTypeEnum } from "./integrationtypeenum";
import { PassthroughBehaviorEnum } from "./passthroughbehaviorenum";
import { TlsConfig } from "./tlsconfig";


export class GetIntegrationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiGatewayManaged" })
  apiGatewayManaged?: boolean;

  @Metadata({ data: "json, name=ConnectionId" })
  connectionId?: string;

  @Metadata({ data: "json, name=ConnectionType" })
  connectionType?: ConnectionTypeEnum;

  @Metadata({ data: "json, name=ContentHandlingStrategy" })
  contentHandlingStrategy?: ContentHandlingStrategyEnum;

  @Metadata({ data: "json, name=CredentialsArn" })
  credentialsArn?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IntegrationId" })
  integrationId?: string;

  @Metadata({ data: "json, name=IntegrationMethod" })
  integrationMethod?: string;

  @Metadata({ data: "json, name=IntegrationResponseSelectionExpression" })
  integrationResponseSelectionExpression?: string;

  @Metadata({ data: "json, name=IntegrationSubtype" })
  integrationSubtype?: string;

  @Metadata({ data: "json, name=IntegrationType" })
  integrationType?: IntegrationTypeEnum;

  @Metadata({ data: "json, name=IntegrationUri" })
  integrationUri?: string;

  @Metadata({ data: "json, name=PassthroughBehavior" })
  passthroughBehavior?: PassthroughBehaviorEnum;

  @Metadata({ data: "json, name=PayloadFormatVersion" })
  payloadFormatVersion?: string;

  @Metadata({ data: "json, name=RequestParameters" })
  requestParameters?: Map<string, string>;

  @Metadata({ data: "json, name=RequestTemplates" })
  requestTemplates?: Map<string, string>;

  @Metadata({ data: "json, name=ResponseParameters" })
  responseParameters?: Map<string, Map<string, string>>;

  @Metadata({ data: "json, name=TemplateSelectionExpression" })
  templateSelectionExpression?: string;

  @Metadata({ data: "json, name=TimeoutInMillis" })
  timeoutInMillis?: number;

  @Metadata({ data: "json, name=TlsConfig" })
  tlsConfig?: TlsConfig;
}

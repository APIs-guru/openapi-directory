import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { ContentHandlingStrategyEnum } from "./contenthandlingstrategyenum";
import { IntegrationTypeEnum } from "./integrationtypeenum";
import { PassthroughBehaviorEnum } from "./passthroughbehaviorenum";
import { TlsConfig } from "./tlsconfig";



export class CreateIntegrationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiGatewayManaged" })
  apiGatewayManaged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ConnectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectionType" })
  connectionType?: ConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ContentHandlingStrategy" })
  contentHandlingStrategy?: ContentHandlingStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=CredentialsArn" })
  credentialsArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IntegrationId" })
  integrationId?: string;

  @SpeakeasyMetadata({ data: "json, name=IntegrationMethod" })
  integrationMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=IntegrationResponseSelectionExpression" })
  integrationResponseSelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=IntegrationSubtype" })
  integrationSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=IntegrationType" })
  integrationType?: IntegrationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IntegrationUri" })
  integrationUri?: string;

  @SpeakeasyMetadata({ data: "json, name=PassthroughBehavior" })
  passthroughBehavior?: PassthroughBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=PayloadFormatVersion" })
  payloadFormatVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestParameters" })
  requestParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=RequestTemplates" })
  requestTemplates?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ResponseParameters" })
  responseParameters?: Map<string, Map<string, string>>;

  @SpeakeasyMetadata({ data: "json, name=TemplateSelectionExpression" })
  templateSelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeoutInMillis" })
  timeoutInMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=TlsConfig" })
  tlsConfig?: TlsConfig;
}

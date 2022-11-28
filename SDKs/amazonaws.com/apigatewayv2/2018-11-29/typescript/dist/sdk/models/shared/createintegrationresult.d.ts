import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { ContentHandlingStrategyEnum } from "./contenthandlingstrategyenum";
import { IntegrationTypeEnum } from "./integrationtypeenum";
import { PassthroughBehaviorEnum } from "./passthroughbehaviorenum";
import { TlsConfig } from "./tlsconfig";
export declare class CreateIntegrationResult extends SpeakeasyBase {
    apiGatewayManaged?: boolean;
    connectionId?: string;
    connectionType?: ConnectionTypeEnum;
    contentHandlingStrategy?: ContentHandlingStrategyEnum;
    credentialsArn?: string;
    description?: string;
    integrationId?: string;
    integrationMethod?: string;
    integrationResponseSelectionExpression?: string;
    integrationSubtype?: string;
    integrationType?: IntegrationTypeEnum;
    integrationUri?: string;
    passthroughBehavior?: PassthroughBehaviorEnum;
    payloadFormatVersion?: string;
    requestParameters?: Map<string, string>;
    requestTemplates?: Map<string, string>;
    responseParameters?: Map<string, Map<string, string>>;
    templateSelectionExpression?: string;
    timeoutInMillis?: number;
    tlsConfig?: TlsConfig;
}

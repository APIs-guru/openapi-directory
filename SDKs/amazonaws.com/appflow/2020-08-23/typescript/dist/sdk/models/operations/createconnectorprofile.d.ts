import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateConnectorProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateConnectorProfileRequestBodyConnectionModeEnum {
    Public = "Public",
    Private = "Private"
}
/**
 *  Defines the connector-specific configuration and credentials for the connector profile.
**/
export declare class CreateConnectorProfileRequestBodyConnectorProfileConfig extends SpeakeasyBase {
    connectorProfileCredentials?: shared.ConnectorProfileCredentials;
    connectorProfileProperties?: shared.ConnectorProfileProperties;
}
export declare enum CreateConnectorProfileRequestBodyConnectorTypeEnum {
    Salesforce = "Salesforce",
    Singular = "Singular",
    Slack = "Slack",
    Redshift = "Redshift",
    S3 = "S3",
    Marketo = "Marketo",
    Googleanalytics = "Googleanalytics",
    Zendesk = "Zendesk",
    Servicenow = "Servicenow",
    Datadog = "Datadog",
    Trendmicro = "Trendmicro",
    Snowflake = "Snowflake",
    Dynatrace = "Dynatrace",
    Infornexus = "Infornexus",
    Amplitude = "Amplitude",
    Veeva = "Veeva",
    EventBridge = "EventBridge",
    LookoutMetrics = "LookoutMetrics",
    Upsolver = "Upsolver",
    Honeycode = "Honeycode",
    CustomerProfiles = "CustomerProfiles",
    SapoData = "SAPOData"
}
export declare class CreateConnectorProfileRequestBody extends SpeakeasyBase {
    connectionMode: CreateConnectorProfileRequestBodyConnectionModeEnum;
    connectorProfileConfig: CreateConnectorProfileRequestBodyConnectorProfileConfig;
    connectorProfileName: string;
    connectorType: CreateConnectorProfileRequestBodyConnectorTypeEnum;
    kmsArn?: string;
}
export declare class CreateConnectorProfileRequest extends SpeakeasyBase {
    headers: CreateConnectorProfileHeaders;
    request: CreateConnectorProfileRequestBody;
}
export declare class CreateConnectorProfileResponse extends SpeakeasyBase {
    conflictException?: any;
    connectorAuthenticationException?: any;
    contentType: string;
    createConnectorProfileResponse?: shared.CreateConnectorProfileResponse;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}

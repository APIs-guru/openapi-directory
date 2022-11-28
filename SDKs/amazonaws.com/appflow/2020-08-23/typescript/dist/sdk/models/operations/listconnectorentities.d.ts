import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListConnectorEntitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum ListConnectorEntitiesRequestBodyConnectorTypeEnum {
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
export declare class ListConnectorEntitiesRequestBody extends SpeakeasyBase {
    connectorProfileName?: string;
    connectorType?: ListConnectorEntitiesRequestBodyConnectorTypeEnum;
    entitiesPath?: string;
}
export declare class ListConnectorEntitiesRequest extends SpeakeasyBase {
    headers: ListConnectorEntitiesHeaders;
    request: ListConnectorEntitiesRequestBody;
}
export declare class ListConnectorEntitiesResponse extends SpeakeasyBase {
    connectorAuthenticationException?: any;
    connectorServerException?: any;
    contentType: string;
    internalServerException?: any;
    listConnectorEntitiesResponse?: shared.ListConnectorEntitiesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}

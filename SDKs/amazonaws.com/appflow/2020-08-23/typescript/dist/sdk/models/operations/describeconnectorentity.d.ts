import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeConnectorEntityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum DescribeConnectorEntityRequestBodyConnectorTypeEnum {
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
export declare class DescribeConnectorEntityRequestBody extends SpeakeasyBase {
    connectorEntityName: string;
    connectorProfileName?: string;
    connectorType?: DescribeConnectorEntityRequestBodyConnectorTypeEnum;
}
export declare class DescribeConnectorEntityRequest extends SpeakeasyBase {
    headers: DescribeConnectorEntityHeaders;
    request: DescribeConnectorEntityRequestBody;
}
export declare class DescribeConnectorEntityResponse extends SpeakeasyBase {
    connectorAuthenticationException?: any;
    connectorServerException?: any;
    contentType: string;
    describeConnectorEntityResponse?: shared.DescribeConnectorEntityResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}

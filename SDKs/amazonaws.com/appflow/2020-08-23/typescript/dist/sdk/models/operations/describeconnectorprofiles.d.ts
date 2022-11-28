import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeConnectorProfilesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeConnectorProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum DescribeConnectorProfilesRequestBodyConnectorTypeEnum {
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
export declare class DescribeConnectorProfilesRequestBody extends SpeakeasyBase {
    connectorProfileNames?: string[];
    connectorType?: DescribeConnectorProfilesRequestBodyConnectorTypeEnum;
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeConnectorProfilesRequest extends SpeakeasyBase {
    queryParams: DescribeConnectorProfilesQueryParams;
    headers: DescribeConnectorProfilesHeaders;
    request: DescribeConnectorProfilesRequestBody;
}
export declare class DescribeConnectorProfilesResponse extends SpeakeasyBase {
    contentType: string;
    describeConnectorProfilesResponse?: shared.DescribeConnectorProfilesResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}

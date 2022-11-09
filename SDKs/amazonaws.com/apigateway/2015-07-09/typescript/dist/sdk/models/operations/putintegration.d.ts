import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutIntegrationPathParams extends SpeakeasyBase {
    httpMethod: string;
    resourceId: string;
    restapiId: string;
}
export declare class PutIntegrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum PutIntegrationRequestBodyConnectionTypeEnum {
    Internet = "INTERNET",
    VpcLink = "VPC_LINK"
}
export declare enum PutIntegrationRequestBodyContentHandlingEnum {
    ConvertToBinary = "CONVERT_TO_BINARY",
    ConvertToText = "CONVERT_TO_TEXT"
}
export declare class PutIntegrationRequestBodyTlsConfig extends SpeakeasyBase {
    insecureSkipVerification?: boolean;
}
export declare enum PutIntegrationRequestBodyTypeEnum {
    Http = "HTTP",
    Aws = "AWS",
    Mock = "MOCK",
    HttpProxy = "HTTP_PROXY",
    AwsProxy = "AWS_PROXY"
}
export declare class PutIntegrationRequestBody extends SpeakeasyBase {
    cacheKeyParameters?: string[];
    cacheNamespace?: string;
    connectionId?: string;
    connectionType?: PutIntegrationRequestBodyConnectionTypeEnum;
    contentHandling?: PutIntegrationRequestBodyContentHandlingEnum;
    credentials?: string;
    httpMethod?: string;
    passthroughBehavior?: string;
    requestParameters?: Map<string, string>;
    requestTemplates?: Map<string, string>;
    timeoutInMillis?: number;
    tlsConfig?: PutIntegrationRequestBodyTlsConfig;
    type: PutIntegrationRequestBodyTypeEnum;
    uri?: string;
}
export declare class PutIntegrationRequest extends SpeakeasyBase {
    pathParams: PutIntegrationPathParams;
    headers: PutIntegrationHeaders;
    request: PutIntegrationRequestBody;
}
export declare class PutIntegrationResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    integration?: shared.Integration;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateRestApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateRestApiRequestBodyApiKeySourceEnum {
    Header = "HEADER",
    Authorizer = "AUTHORIZER"
}
/**
 * The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has.
**/
export declare class CreateRestApiRequestBodyEndpointConfiguration extends SpeakeasyBase {
    types?: shared.EndpointTypeEnum[];
    vpcEndpointIds?: string[];
}
export declare class CreateRestApiRequestBody extends SpeakeasyBase {
    apiKeySource?: CreateRestApiRequestBodyApiKeySourceEnum;
    binaryMediaTypes?: string[];
    cloneFrom?: string;
    description?: string;
    disableExecuteApiEndpoint?: boolean;
    endpointConfiguration?: CreateRestApiRequestBodyEndpointConfiguration;
    minimumCompressionSize?: number;
    name: string;
    policy?: string;
    tags?: Map<string, string>;
    version?: string;
}
export declare class CreateRestApiRequest extends SpeakeasyBase {
    headers: CreateRestApiHeaders;
    request: CreateRestApiRequestBody;
}
export declare class CreateRestApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    restApi?: shared.RestApi;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}

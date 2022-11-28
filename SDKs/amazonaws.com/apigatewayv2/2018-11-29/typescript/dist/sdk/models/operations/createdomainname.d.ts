import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDomainNameHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The mutual TLS authentication configuration for a custom domain name.
**/
export declare class CreateDomainNameRequestBodyMutualTlsAuthentication extends SpeakeasyBase {
    truststoreUri?: string;
    truststoreVersion?: string;
}
export declare class CreateDomainNameRequestBody extends SpeakeasyBase {
    domainName: string;
    domainNameConfigurations?: shared.DomainNameConfiguration[];
    mutualTlsAuthentication?: CreateDomainNameRequestBodyMutualTlsAuthentication;
    tags?: Map<string, string>;
}
export declare class CreateDomainNameRequest extends SpeakeasyBase {
    headers: CreateDomainNameHeaders;
    request: CreateDomainNameRequestBody;
}
export declare class CreateDomainNameResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createDomainNameResponse?: shared.CreateDomainNameResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}

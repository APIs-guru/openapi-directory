import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDomainNamePathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class UpdateDomainNameHeaders extends SpeakeasyBase {
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
export declare class UpdateDomainNameRequestBodyMutualTlsAuthentication extends SpeakeasyBase {
    truststoreUri?: string;
    truststoreVersion?: string;
}
export declare class UpdateDomainNameRequestBody extends SpeakeasyBase {
    domainNameConfigurations?: shared.DomainNameConfiguration[];
    mutualTlsAuthentication?: UpdateDomainNameRequestBodyMutualTlsAuthentication;
}
export declare class UpdateDomainNameRequest extends SpeakeasyBase {
    pathParams: UpdateDomainNamePathParams;
    headers: UpdateDomainNameHeaders;
    request: UpdateDomainNameRequestBody;
}
export declare class UpdateDomainNameResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateDomainNameResponse?: shared.UpdateDomainNameResponse;
}

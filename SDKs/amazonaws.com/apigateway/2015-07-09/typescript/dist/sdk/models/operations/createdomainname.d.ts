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
 * The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has.
**/
export declare class CreateDomainNameRequestBodyEndpointConfiguration extends SpeakeasyBase {
    types?: shared.EndpointTypeEnum[];
    vpcEndpointIds?: string[];
}
/**
 * If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.
**/
export declare class CreateDomainNameRequestBodyMutualTlsAuthentication extends SpeakeasyBase {
    truststoreUri?: string;
    truststoreVersion?: string;
}
export declare enum CreateDomainNameRequestBodySecurityPolicyEnum {
    Tls10 = "TLS_1_0",
    Tls12 = "TLS_1_2"
}
export declare class CreateDomainNameRequestBody extends SpeakeasyBase {
    certificateArn?: string;
    certificateBody?: string;
    certificateChain?: string;
    certificateName?: string;
    certificatePrivateKey?: string;
    domainName: string;
    endpointConfiguration?: CreateDomainNameRequestBodyEndpointConfiguration;
    mutualTlsAuthentication?: CreateDomainNameRequestBodyMutualTlsAuthentication;
    ownershipVerificationCertificateArn?: string;
    regionalCertificateArn?: string;
    regionalCertificateName?: string;
    securityPolicy?: CreateDomainNameRequestBodySecurityPolicyEnum;
    tags?: Map<string, string>;
}
export declare class CreateDomainNameRequest extends SpeakeasyBase {
    headers: CreateDomainNameHeaders;
    request: CreateDomainNameRequestBody;
}
export declare class CreateDomainNameResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    domainName?: shared.DomainName;
    limitExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}

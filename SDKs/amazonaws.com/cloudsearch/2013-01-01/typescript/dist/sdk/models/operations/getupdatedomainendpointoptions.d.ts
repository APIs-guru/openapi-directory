import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUpdateDomainEndpointOptionsActionEnum {
    UpdateDomainEndpointOptions = "UpdateDomainEndpointOptions"
}
/**
 * The domain's endpoint options.
**/
export declare class GetUpdateDomainEndpointOptionsDomainEndpointOptions extends SpeakeasyBase {
    enforceHttps?: boolean;
    tlsSecurityPolicy?: shared.TlsSecurityPolicyEnum;
}
export declare enum GetUpdateDomainEndpointOptionsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetUpdateDomainEndpointOptionsQueryParams extends SpeakeasyBase {
    action: GetUpdateDomainEndpointOptionsActionEnum;
    domainEndpointOptions: GetUpdateDomainEndpointOptionsDomainEndpointOptions;
    domainName: string;
    version: GetUpdateDomainEndpointOptionsVersionEnum;
}
export declare class GetUpdateDomainEndpointOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateDomainEndpointOptionsRequest extends SpeakeasyBase {
    queryParams: GetUpdateDomainEndpointOptionsQueryParams;
    headers: GetUpdateDomainEndpointOptionsHeaders;
}
export declare class GetUpdateDomainEndpointOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

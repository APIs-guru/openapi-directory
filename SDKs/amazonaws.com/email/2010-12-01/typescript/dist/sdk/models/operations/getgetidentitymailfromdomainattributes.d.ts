import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetIdentityMailFromDomainAttributesActionEnum {
    GetIdentityMailFromDomainAttributes = "GetIdentityMailFromDomainAttributes"
}
export declare enum GetGetIdentityMailFromDomainAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetGetIdentityMailFromDomainAttributesQueryParams extends SpeakeasyBase {
    action: GetGetIdentityMailFromDomainAttributesActionEnum;
    identities: string[];
    version: GetGetIdentityMailFromDomainAttributesVersionEnum;
}
export declare class GetGetIdentityMailFromDomainAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetIdentityMailFromDomainAttributesRequest extends SpeakeasyBase {
    queryParams: GetGetIdentityMailFromDomainAttributesQueryParams;
    headers: GetGetIdentityMailFromDomainAttributesHeaders;
}
export declare class GetGetIdentityMailFromDomainAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

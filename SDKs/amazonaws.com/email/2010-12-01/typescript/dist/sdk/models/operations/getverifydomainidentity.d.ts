import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetVerifyDomainIdentityActionEnum {
    VerifyDomainIdentity = "VerifyDomainIdentity"
}
export declare enum GetVerifyDomainIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetVerifyDomainIdentityQueryParams extends SpeakeasyBase {
    action: GetVerifyDomainIdentityActionEnum;
    domain: string;
    version: GetVerifyDomainIdentityVersionEnum;
}
export declare class GetVerifyDomainIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetVerifyDomainIdentityRequest extends SpeakeasyBase {
    queryParams: GetVerifyDomainIdentityQueryParams;
    headers: GetVerifyDomainIdentityHeaders;
}
export declare class GetVerifyDomainIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

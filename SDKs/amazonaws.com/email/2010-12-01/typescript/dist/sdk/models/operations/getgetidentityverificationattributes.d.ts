import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetIdentityVerificationAttributesActionEnum {
    GetIdentityVerificationAttributes = "GetIdentityVerificationAttributes"
}
export declare enum GetGetIdentityVerificationAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetGetIdentityVerificationAttributesQueryParams extends SpeakeasyBase {
    action: GetGetIdentityVerificationAttributesActionEnum;
    identities: string[];
    version: GetGetIdentityVerificationAttributesVersionEnum;
}
export declare class GetGetIdentityVerificationAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetIdentityVerificationAttributesRequest extends SpeakeasyBase {
    queryParams: GetGetIdentityVerificationAttributesQueryParams;
    headers: GetGetIdentityVerificationAttributesHeaders;
}
export declare class GetGetIdentityVerificationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

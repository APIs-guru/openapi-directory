import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetVerifyEmailIdentityActionEnum {
    VerifyEmailIdentity = "VerifyEmailIdentity"
}
export declare enum GetVerifyEmailIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetVerifyEmailIdentityQueryParams extends SpeakeasyBase {
    action: GetVerifyEmailIdentityActionEnum;
    emailAddress: string;
    version: GetVerifyEmailIdentityVersionEnum;
}
export declare class GetVerifyEmailIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetVerifyEmailIdentityRequest extends SpeakeasyBase {
    queryParams: GetVerifyEmailIdentityQueryParams;
    headers: GetVerifyEmailIdentityHeaders;
}
export declare class GetVerifyEmailIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

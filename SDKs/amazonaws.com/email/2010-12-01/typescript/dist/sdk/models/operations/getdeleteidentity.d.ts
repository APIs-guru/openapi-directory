import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteIdentityActionEnum {
    DeleteIdentity = "DeleteIdentity"
}
export declare enum GetDeleteIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteIdentityQueryParams extends SpeakeasyBase {
    action: GetDeleteIdentityActionEnum;
    identity: string;
    version: GetDeleteIdentityVersionEnum;
}
export declare class GetDeleteIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteIdentityRequest extends SpeakeasyBase {
    queryParams: GetDeleteIdentityQueryParams;
    headers: GetDeleteIdentityHeaders;
}
export declare class GetDeleteIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

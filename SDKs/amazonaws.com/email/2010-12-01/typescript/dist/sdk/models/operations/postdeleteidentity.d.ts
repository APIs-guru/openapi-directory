import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteIdentityActionEnum {
    DeleteIdentity = "DeleteIdentity"
}
export declare enum PostDeleteIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteIdentityQueryParams extends SpeakeasyBase {
    action: PostDeleteIdentityActionEnum;
    version: PostDeleteIdentityVersionEnum;
}
export declare class PostDeleteIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteIdentityRequest extends SpeakeasyBase {
    queryParams: PostDeleteIdentityQueryParams;
    headers: PostDeleteIdentityHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

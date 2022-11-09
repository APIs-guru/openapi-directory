import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPutUserPermissionsBoundaryActionEnum {
    PutUserPermissionsBoundary = "PutUserPermissionsBoundary"
}
export declare enum PostPutUserPermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostPutUserPermissionsBoundaryQueryParams extends SpeakeasyBase {
    action: PostPutUserPermissionsBoundaryActionEnum;
    version: PostPutUserPermissionsBoundaryVersionEnum;
}
export declare class PostPutUserPermissionsBoundaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutUserPermissionsBoundaryRequest extends SpeakeasyBase {
    queryParams: PostPutUserPermissionsBoundaryQueryParams;
    headers: PostPutUserPermissionsBoundaryHeaders;
    request?: Uint8Array;
}
export declare class PostPutUserPermissionsBoundaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

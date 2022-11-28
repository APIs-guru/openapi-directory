import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteInstanceProfileActionEnum {
    DeleteInstanceProfile = "DeleteInstanceProfile"
}
export declare enum PostDeleteInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteInstanceProfileQueryParams extends SpeakeasyBase {
    action: PostDeleteInstanceProfileActionEnum;
    version: PostDeleteInstanceProfileVersionEnum;
}
export declare class PostDeleteInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteInstanceProfileRequest extends SpeakeasyBase {
    queryParams: PostDeleteInstanceProfileQueryParams;
    headers: PostDeleteInstanceProfileHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

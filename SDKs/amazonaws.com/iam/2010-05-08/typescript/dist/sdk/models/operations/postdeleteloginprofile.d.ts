import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteLoginProfileActionEnum {
    DeleteLoginProfile = "DeleteLoginProfile"
}
export declare enum PostDeleteLoginProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteLoginProfileQueryParams extends SpeakeasyBase {
    action: PostDeleteLoginProfileActionEnum;
    version: PostDeleteLoginProfileVersionEnum;
}
export declare class PostDeleteLoginProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteLoginProfileRequest extends SpeakeasyBase {
    queryParams: PostDeleteLoginProfileQueryParams;
    headers: PostDeleteLoginProfileHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteLoginProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetAccessKeyLastUsedActionEnum {
    GetAccessKeyLastUsed = "GetAccessKeyLastUsed"
}
export declare enum PostGetAccessKeyLastUsedVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetAccessKeyLastUsedQueryParams extends SpeakeasyBase {
    action: PostGetAccessKeyLastUsedActionEnum;
    version: PostGetAccessKeyLastUsedVersionEnum;
}
export declare class PostGetAccessKeyLastUsedHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetAccessKeyLastUsedRequest extends SpeakeasyBase {
    queryParams: PostGetAccessKeyLastUsedQueryParams;
    headers: PostGetAccessKeyLastUsedHeaders;
    request?: Uint8Array;
}
export declare class PostGetAccessKeyLastUsedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

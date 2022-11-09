import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeLifecycleHookTypesActionEnum {
    DescribeLifecycleHookTypes = "DescribeLifecycleHookTypes"
}
export declare enum PostDescribeLifecycleHookTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeLifecycleHookTypesQueryParams extends SpeakeasyBase {
    action: PostDescribeLifecycleHookTypesActionEnum;
    version: PostDescribeLifecycleHookTypesVersionEnum;
}
export declare class PostDescribeLifecycleHookTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLifecycleHookTypesRequest extends SpeakeasyBase {
    queryParams: PostDescribeLifecycleHookTypesQueryParams;
    headers: PostDescribeLifecycleHookTypesHeaders;
}
export declare class PostDescribeLifecycleHookTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

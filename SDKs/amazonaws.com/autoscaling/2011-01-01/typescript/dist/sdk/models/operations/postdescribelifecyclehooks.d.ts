import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeLifecycleHooksActionEnum {
    DescribeLifecycleHooks = "DescribeLifecycleHooks"
}
export declare enum PostDescribeLifecycleHooksVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeLifecycleHooksQueryParams extends SpeakeasyBase {
    action: PostDescribeLifecycleHooksActionEnum;
    version: PostDescribeLifecycleHooksVersionEnum;
}
export declare class PostDescribeLifecycleHooksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLifecycleHooksRequest extends SpeakeasyBase {
    queryParams: PostDescribeLifecycleHooksQueryParams;
    headers: PostDescribeLifecycleHooksHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLifecycleHooksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

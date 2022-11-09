import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeBundleTasksActionEnum {
    DescribeBundleTasks = "DescribeBundleTasks"
}
export declare enum PostDescribeBundleTasksVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeBundleTasksQueryParams extends SpeakeasyBase {
    action: PostDescribeBundleTasksActionEnum;
    version: PostDescribeBundleTasksVersionEnum;
}
export declare class PostDescribeBundleTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeBundleTasksRequest extends SpeakeasyBase {
    queryParams: PostDescribeBundleTasksQueryParams;
    headers: PostDescribeBundleTasksHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeBundleTasksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

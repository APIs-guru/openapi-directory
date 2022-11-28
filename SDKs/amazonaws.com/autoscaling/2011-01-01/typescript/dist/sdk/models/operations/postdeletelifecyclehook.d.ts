import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteLifecycleHookActionEnum {
    DeleteLifecycleHook = "DeleteLifecycleHook"
}
export declare enum PostDeleteLifecycleHookVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDeleteLifecycleHookQueryParams extends SpeakeasyBase {
    action: PostDeleteLifecycleHookActionEnum;
    version: PostDeleteLifecycleHookVersionEnum;
}
export declare class PostDeleteLifecycleHookHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteLifecycleHookRequest extends SpeakeasyBase {
    queryParams: PostDeleteLifecycleHookQueryParams;
    headers: PostDeleteLifecycleHookHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteLifecycleHookResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

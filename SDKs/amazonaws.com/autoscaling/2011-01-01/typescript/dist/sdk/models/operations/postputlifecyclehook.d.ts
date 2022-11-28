import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPutLifecycleHookActionEnum {
    PutLifecycleHook = "PutLifecycleHook"
}
export declare enum PostPutLifecycleHookVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostPutLifecycleHookQueryParams extends SpeakeasyBase {
    action: PostPutLifecycleHookActionEnum;
    version: PostPutLifecycleHookVersionEnum;
}
export declare class PostPutLifecycleHookHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutLifecycleHookRequest extends SpeakeasyBase {
    queryParams: PostPutLifecycleHookQueryParams;
    headers: PostPutLifecycleHookHeaders;
    request?: Uint8Array;
}
export declare class PostPutLifecycleHookResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

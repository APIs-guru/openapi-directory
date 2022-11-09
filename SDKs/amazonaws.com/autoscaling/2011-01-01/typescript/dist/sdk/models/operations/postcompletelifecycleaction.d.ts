import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCompleteLifecycleActionActionEnum {
    CompleteLifecycleAction = "CompleteLifecycleAction"
}
export declare enum PostCompleteLifecycleActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostCompleteLifecycleActionQueryParams extends SpeakeasyBase {
    action: PostCompleteLifecycleActionActionEnum;
    version: PostCompleteLifecycleActionVersionEnum;
}
export declare class PostCompleteLifecycleActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCompleteLifecycleActionRequest extends SpeakeasyBase {
    queryParams: PostCompleteLifecycleActionQueryParams;
    headers: PostCompleteLifecycleActionHeaders;
    request?: Uint8Array;
}
export declare class PostCompleteLifecycleActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCancelBundleTaskActionEnum {
    CancelBundleTask = "CancelBundleTask"
}
export declare enum PostCancelBundleTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCancelBundleTaskQueryParams extends SpeakeasyBase {
    action: PostCancelBundleTaskActionEnum;
    version: PostCancelBundleTaskVersionEnum;
}
export declare class PostCancelBundleTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCancelBundleTaskRequest extends SpeakeasyBase {
    queryParams: PostCancelBundleTaskQueryParams;
    headers: PostCancelBundleTaskHeaders;
    request?: Uint8Array;
}
export declare class PostCancelBundleTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

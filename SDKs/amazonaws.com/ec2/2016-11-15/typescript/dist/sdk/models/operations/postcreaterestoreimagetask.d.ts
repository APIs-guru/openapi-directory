import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateRestoreImageTaskActionEnum {
    CreateRestoreImageTask = "CreateRestoreImageTask"
}
export declare enum PostCreateRestoreImageTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateRestoreImageTaskQueryParams extends SpeakeasyBase {
    action: PostCreateRestoreImageTaskActionEnum;
    version: PostCreateRestoreImageTaskVersionEnum;
}
export declare class PostCreateRestoreImageTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateRestoreImageTaskRequest extends SpeakeasyBase {
    queryParams: PostCreateRestoreImageTaskQueryParams;
    headers: PostCreateRestoreImageTaskHeaders;
    request?: Uint8Array;
}
export declare class PostCreateRestoreImageTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

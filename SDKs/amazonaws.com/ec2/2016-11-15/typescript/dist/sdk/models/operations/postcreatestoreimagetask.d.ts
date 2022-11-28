import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateStoreImageTaskActionEnum {
    CreateStoreImageTask = "CreateStoreImageTask"
}
export declare enum PostCreateStoreImageTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateStoreImageTaskQueryParams extends SpeakeasyBase {
    action: PostCreateStoreImageTaskActionEnum;
    version: PostCreateStoreImageTaskVersionEnum;
}
export declare class PostCreateStoreImageTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateStoreImageTaskRequest extends SpeakeasyBase {
    queryParams: PostCreateStoreImageTaskQueryParams;
    headers: PostCreateStoreImageTaskHeaders;
    request?: Uint8Array;
}
export declare class PostCreateStoreImageTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

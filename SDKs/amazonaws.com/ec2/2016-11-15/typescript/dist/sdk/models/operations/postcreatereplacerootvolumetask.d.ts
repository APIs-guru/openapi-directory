import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateReplaceRootVolumeTaskActionEnum {
    CreateReplaceRootVolumeTask = "CreateReplaceRootVolumeTask"
}
export declare enum PostCreateReplaceRootVolumeTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateReplaceRootVolumeTaskQueryParams extends SpeakeasyBase {
    action: PostCreateReplaceRootVolumeTaskActionEnum;
    version: PostCreateReplaceRootVolumeTaskVersionEnum;
}
export declare class PostCreateReplaceRootVolumeTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateReplaceRootVolumeTaskRequest extends SpeakeasyBase {
    queryParams: PostCreateReplaceRootVolumeTaskQueryParams;
    headers: PostCreateReplaceRootVolumeTaskHeaders;
    request?: Uint8Array;
}
export declare class PostCreateReplaceRootVolumeTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

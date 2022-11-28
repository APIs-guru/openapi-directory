import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCancelImportTaskActionEnum {
    CancelImportTask = "CancelImportTask"
}
export declare enum PostCancelImportTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCancelImportTaskQueryParams extends SpeakeasyBase {
    action: PostCancelImportTaskActionEnum;
    version: PostCancelImportTaskVersionEnum;
}
export declare class PostCancelImportTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCancelImportTaskRequest extends SpeakeasyBase {
    queryParams: PostCancelImportTaskQueryParams;
    headers: PostCancelImportTaskHeaders;
    request?: Uint8Array;
}
export declare class PostCancelImportTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCancelExportTaskActionEnum {
    CancelExportTask = "CancelExportTask"
}
export declare enum PostCancelExportTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCancelExportTaskQueryParams extends SpeakeasyBase {
    action: PostCancelExportTaskActionEnum;
    version: PostCancelExportTaskVersionEnum;
}
export declare class PostCancelExportTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCancelExportTaskRequest extends SpeakeasyBase {
    queryParams: PostCancelExportTaskQueryParams;
    headers: PostCancelExportTaskHeaders;
    request?: Uint8Array;
}
export declare class PostCancelExportTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

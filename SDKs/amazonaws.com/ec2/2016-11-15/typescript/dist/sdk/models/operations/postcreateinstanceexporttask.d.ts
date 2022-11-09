import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateInstanceExportTaskActionEnum {
    CreateInstanceExportTask = "CreateInstanceExportTask"
}
export declare enum PostCreateInstanceExportTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateInstanceExportTaskQueryParams extends SpeakeasyBase {
    action: PostCreateInstanceExportTaskActionEnum;
    version: PostCreateInstanceExportTaskVersionEnum;
}
export declare class PostCreateInstanceExportTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateInstanceExportTaskRequest extends SpeakeasyBase {
    queryParams: PostCreateInstanceExportTaskQueryParams;
    headers: PostCreateInstanceExportTaskHeaders;
    request?: Uint8Array;
}
export declare class PostCreateInstanceExportTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

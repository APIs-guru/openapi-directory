import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCancelExportTaskActionEnum {
    CancelExportTask = "CancelExportTask"
}
export declare enum GetCancelExportTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCancelExportTaskQueryParams extends SpeakeasyBase {
    action: GetCancelExportTaskActionEnum;
    exportTaskId: string;
    version: GetCancelExportTaskVersionEnum;
}
export declare class GetCancelExportTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCancelExportTaskRequest extends SpeakeasyBase {
    queryParams: GetCancelExportTaskQueryParams;
    headers: GetCancelExportTaskHeaders;
}
export declare class GetCancelExportTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

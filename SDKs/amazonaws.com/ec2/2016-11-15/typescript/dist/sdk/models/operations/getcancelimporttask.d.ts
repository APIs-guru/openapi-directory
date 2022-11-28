import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCancelImportTaskActionEnum {
    CancelImportTask = "CancelImportTask"
}
export declare enum GetCancelImportTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCancelImportTaskQueryParams extends SpeakeasyBase {
    action: GetCancelImportTaskActionEnum;
    cancelReason?: string;
    dryRun?: boolean;
    importTaskId?: string;
    version: GetCancelImportTaskVersionEnum;
}
export declare class GetCancelImportTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCancelImportTaskRequest extends SpeakeasyBase {
    queryParams: GetCancelImportTaskQueryParams;
    headers: GetCancelImportTaskHeaders;
}
export declare class GetCancelImportTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

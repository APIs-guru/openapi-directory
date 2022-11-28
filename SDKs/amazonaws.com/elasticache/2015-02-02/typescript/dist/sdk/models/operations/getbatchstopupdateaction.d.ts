import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetBatchStopUpdateActionActionEnum {
    BatchStopUpdateAction = "BatchStopUpdateAction"
}
export declare enum GetBatchStopUpdateActionVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetBatchStopUpdateActionQueryParams extends SpeakeasyBase {
    action: GetBatchStopUpdateActionActionEnum;
    cacheClusterIds?: string[];
    replicationGroupIds?: string[];
    serviceUpdateName: string;
    version: GetBatchStopUpdateActionVersionEnum;
}
export declare class GetBatchStopUpdateActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBatchStopUpdateActionRequest extends SpeakeasyBase {
    queryParams: GetBatchStopUpdateActionQueryParams;
    headers: GetBatchStopUpdateActionHeaders;
}
export declare class GetBatchStopUpdateActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

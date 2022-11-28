import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetBatchApplyUpdateActionActionEnum {
    BatchApplyUpdateAction = "BatchApplyUpdateAction"
}
export declare enum GetBatchApplyUpdateActionVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetBatchApplyUpdateActionQueryParams extends SpeakeasyBase {
    action: GetBatchApplyUpdateActionActionEnum;
    cacheClusterIds?: string[];
    replicationGroupIds?: string[];
    serviceUpdateName: string;
    version: GetBatchApplyUpdateActionVersionEnum;
}
export declare class GetBatchApplyUpdateActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBatchApplyUpdateActionRequest extends SpeakeasyBase {
    queryParams: GetBatchApplyUpdateActionQueryParams;
    headers: GetBatchApplyUpdateActionHeaders;
}
export declare class GetBatchApplyUpdateActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

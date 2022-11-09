import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetBatchDeleteScheduledActionActionEnum {
    BatchDeleteScheduledAction = "BatchDeleteScheduledAction"
}
export declare enum GetBatchDeleteScheduledActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetBatchDeleteScheduledActionQueryParams extends SpeakeasyBase {
    action: GetBatchDeleteScheduledActionActionEnum;
    autoScalingGroupName: string;
    scheduledActionNames: string[];
    version: GetBatchDeleteScheduledActionVersionEnum;
}
export declare class GetBatchDeleteScheduledActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBatchDeleteScheduledActionRequest extends SpeakeasyBase {
    queryParams: GetBatchDeleteScheduledActionQueryParams;
    headers: GetBatchDeleteScheduledActionHeaders;
}
export declare class GetBatchDeleteScheduledActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

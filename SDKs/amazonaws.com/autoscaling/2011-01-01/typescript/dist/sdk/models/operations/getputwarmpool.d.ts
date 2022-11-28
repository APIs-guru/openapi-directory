import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPutWarmPoolActionEnum {
    PutWarmPool = "PutWarmPool"
}
export declare enum GetPutWarmPoolPoolStateEnum {
    Stopped = "Stopped",
    Running = "Running"
}
export declare enum GetPutWarmPoolVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetPutWarmPoolQueryParams extends SpeakeasyBase {
    action: GetPutWarmPoolActionEnum;
    autoScalingGroupName: string;
    maxGroupPreparedCapacity?: number;
    minSize?: number;
    poolState?: GetPutWarmPoolPoolStateEnum;
    version: GetPutWarmPoolVersionEnum;
}
export declare class GetPutWarmPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPutWarmPoolRequest extends SpeakeasyBase {
    queryParams: GetPutWarmPoolQueryParams;
    headers: GetPutWarmPoolHeaders;
}
export declare class GetPutWarmPoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

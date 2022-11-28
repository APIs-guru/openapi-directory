import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDetachInstancesActionEnum {
    DetachInstances = "DetachInstances"
}
export declare enum GetDetachInstancesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDetachInstancesQueryParams extends SpeakeasyBase {
    action: GetDetachInstancesActionEnum;
    autoScalingGroupName: string;
    instanceIds?: string[];
    shouldDecrementDesiredCapacity: boolean;
    version: GetDetachInstancesVersionEnum;
}
export declare class GetDetachInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDetachInstancesRequest extends SpeakeasyBase {
    queryParams: GetDetachInstancesQueryParams;
    headers: GetDetachInstancesHeaders;
}
export declare class GetDetachInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

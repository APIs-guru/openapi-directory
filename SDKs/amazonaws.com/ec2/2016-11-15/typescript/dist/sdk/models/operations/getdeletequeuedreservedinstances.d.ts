import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteQueuedReservedInstancesActionEnum {
    DeleteQueuedReservedInstances = "DeleteQueuedReservedInstances"
}
export declare enum GetDeleteQueuedReservedInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteQueuedReservedInstancesQueryParams extends SpeakeasyBase {
    action: GetDeleteQueuedReservedInstancesActionEnum;
    dryRun?: boolean;
    reservedInstancesId: string[];
    version: GetDeleteQueuedReservedInstancesVersionEnum;
}
export declare class GetDeleteQueuedReservedInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteQueuedReservedInstancesRequest extends SpeakeasyBase {
    queryParams: GetDeleteQueuedReservedInstancesQueryParams;
    headers: GetDeleteQueuedReservedInstancesHeaders;
}
export declare class GetDeleteQueuedReservedInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

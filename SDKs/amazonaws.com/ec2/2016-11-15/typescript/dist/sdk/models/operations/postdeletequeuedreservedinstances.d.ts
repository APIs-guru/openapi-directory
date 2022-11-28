import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteQueuedReservedInstancesActionEnum {
    DeleteQueuedReservedInstances = "DeleteQueuedReservedInstances"
}
export declare enum PostDeleteQueuedReservedInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteQueuedReservedInstancesQueryParams extends SpeakeasyBase {
    action: PostDeleteQueuedReservedInstancesActionEnum;
    version: PostDeleteQueuedReservedInstancesVersionEnum;
}
export declare class PostDeleteQueuedReservedInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteQueuedReservedInstancesRequest extends SpeakeasyBase {
    queryParams: PostDeleteQueuedReservedInstancesQueryParams;
    headers: PostDeleteQueuedReservedInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteQueuedReservedInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

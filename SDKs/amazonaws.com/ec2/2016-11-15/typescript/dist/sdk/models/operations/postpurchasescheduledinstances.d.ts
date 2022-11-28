import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPurchaseScheduledInstancesActionEnum {
    PurchaseScheduledInstances = "PurchaseScheduledInstances"
}
export declare enum PostPurchaseScheduledInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostPurchaseScheduledInstancesQueryParams extends SpeakeasyBase {
    action: PostPurchaseScheduledInstancesActionEnum;
    version: PostPurchaseScheduledInstancesVersionEnum;
}
export declare class PostPurchaseScheduledInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPurchaseScheduledInstancesRequest extends SpeakeasyBase {
    queryParams: PostPurchaseScheduledInstancesQueryParams;
    headers: PostPurchaseScheduledInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostPurchaseScheduledInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

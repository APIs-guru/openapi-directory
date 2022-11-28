import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRunScheduledInstancesActionEnum {
    RunScheduledInstances = "RunScheduledInstances"
}
export declare enum PostRunScheduledInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRunScheduledInstancesQueryParams extends SpeakeasyBase {
    action: PostRunScheduledInstancesActionEnum;
    version: PostRunScheduledInstancesVersionEnum;
}
export declare class PostRunScheduledInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRunScheduledInstancesRequest extends SpeakeasyBase {
    queryParams: PostRunScheduledInstancesQueryParams;
    headers: PostRunScheduledInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostRunScheduledInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

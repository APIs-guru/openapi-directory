import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostStopInstancesActionEnum {
    StopInstances = "StopInstances"
}
export declare enum PostStopInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostStopInstancesQueryParams extends SpeakeasyBase {
    action: PostStopInstancesActionEnum;
    version: PostStopInstancesVersionEnum;
}
export declare class PostStopInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStopInstancesRequest extends SpeakeasyBase {
    queryParams: PostStopInstancesQueryParams;
    headers: PostStopInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostStopInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

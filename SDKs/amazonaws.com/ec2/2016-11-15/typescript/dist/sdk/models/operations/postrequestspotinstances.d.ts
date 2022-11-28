import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRequestSpotInstancesActionEnum {
    RequestSpotInstances = "RequestSpotInstances"
}
export declare enum PostRequestSpotInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRequestSpotInstancesQueryParams extends SpeakeasyBase {
    action: PostRequestSpotInstancesActionEnum;
    version: PostRequestSpotInstancesVersionEnum;
}
export declare class PostRequestSpotInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRequestSpotInstancesRequest extends SpeakeasyBase {
    queryParams: PostRequestSpotInstancesQueryParams;
    headers: PostRequestSpotInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostRequestSpotInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

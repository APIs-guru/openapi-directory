import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRunInstancesActionEnum {
    RunInstances = "RunInstances"
}
export declare enum PostRunInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRunInstancesQueryParams extends SpeakeasyBase {
    action: PostRunInstancesActionEnum;
    version: PostRunInstancesVersionEnum;
}
export declare class PostRunInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRunInstancesRequest extends SpeakeasyBase {
    queryParams: PostRunInstancesQueryParams;
    headers: PostRunInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostRunInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostTerminateInstancesActionEnum {
    TerminateInstances = "TerminateInstances"
}
export declare enum PostTerminateInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostTerminateInstancesQueryParams extends SpeakeasyBase {
    action: PostTerminateInstancesActionEnum;
    version: PostTerminateInstancesVersionEnum;
}
export declare class PostTerminateInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTerminateInstancesRequest extends SpeakeasyBase {
    queryParams: PostTerminateInstancesQueryParams;
    headers: PostTerminateInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostTerminateInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

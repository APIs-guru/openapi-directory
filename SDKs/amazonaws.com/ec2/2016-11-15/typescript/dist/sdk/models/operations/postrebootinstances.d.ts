import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRebootInstancesActionEnum {
    RebootInstances = "RebootInstances"
}
export declare enum PostRebootInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRebootInstancesQueryParams extends SpeakeasyBase {
    action: PostRebootInstancesActionEnum;
    version: PostRebootInstancesVersionEnum;
}
export declare class PostRebootInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRebootInstancesRequest extends SpeakeasyBase {
    queryParams: PostRebootInstancesQueryParams;
    headers: PostRebootInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostRebootInstancesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

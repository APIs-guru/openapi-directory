import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAllocateHostsActionEnum {
    AllocateHosts = "AllocateHosts"
}
export declare enum PostAllocateHostsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAllocateHostsQueryParams extends SpeakeasyBase {
    action: PostAllocateHostsActionEnum;
    version: PostAllocateHostsVersionEnum;
}
export declare class PostAllocateHostsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAllocateHostsRequest extends SpeakeasyBase {
    queryParams: PostAllocateHostsQueryParams;
    headers: PostAllocateHostsHeaders;
    request?: Uint8Array;
}
export declare class PostAllocateHostsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

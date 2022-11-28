import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostReleaseHostsActionEnum {
    ReleaseHosts = "ReleaseHosts"
}
export declare enum PostReleaseHostsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostReleaseHostsQueryParams extends SpeakeasyBase {
    action: PostReleaseHostsActionEnum;
    version: PostReleaseHostsVersionEnum;
}
export declare class PostReleaseHostsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostReleaseHostsRequest extends SpeakeasyBase {
    queryParams: PostReleaseHostsQueryParams;
    headers: PostReleaseHostsHeaders;
    request?: Uint8Array;
}
export declare class PostReleaseHostsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

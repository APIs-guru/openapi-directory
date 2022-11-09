import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetAssociatedIpv6PoolCidrsActionEnum {
    GetAssociatedIpv6PoolCidrs = "GetAssociatedIpv6PoolCidrs"
}
export declare enum PostGetAssociatedIpv6PoolCidrsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetAssociatedIpv6PoolCidrsQueryParams extends SpeakeasyBase {
    action: PostGetAssociatedIpv6PoolCidrsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostGetAssociatedIpv6PoolCidrsVersionEnum;
}
export declare class PostGetAssociatedIpv6PoolCidrsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetAssociatedIpv6PoolCidrsRequest extends SpeakeasyBase {
    queryParams: PostGetAssociatedIpv6PoolCidrsQueryParams;
    headers: PostGetAssociatedIpv6PoolCidrsHeaders;
    request?: Uint8Array;
}
export declare class PostGetAssociatedIpv6PoolCidrsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

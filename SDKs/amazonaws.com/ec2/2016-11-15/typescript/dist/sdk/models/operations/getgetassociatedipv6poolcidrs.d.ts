import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetAssociatedIpv6PoolCidrsActionEnum {
    GetAssociatedIpv6PoolCidrs = "GetAssociatedIpv6PoolCidrs"
}
export declare enum GetGetAssociatedIpv6PoolCidrsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetAssociatedIpv6PoolCidrsQueryParams extends SpeakeasyBase {
    action: GetGetAssociatedIpv6PoolCidrsActionEnum;
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    poolId: string;
    version: GetGetAssociatedIpv6PoolCidrsVersionEnum;
}
export declare class GetGetAssociatedIpv6PoolCidrsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetAssociatedIpv6PoolCidrsRequest extends SpeakeasyBase {
    queryParams: GetGetAssociatedIpv6PoolCidrsQueryParams;
    headers: GetGetAssociatedIpv6PoolCidrsHeaders;
}
export declare class GetGetAssociatedIpv6PoolCidrsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

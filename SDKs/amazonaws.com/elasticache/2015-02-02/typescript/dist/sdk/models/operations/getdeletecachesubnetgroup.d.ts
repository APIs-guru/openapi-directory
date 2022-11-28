import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteCacheSubnetGroupActionEnum {
    DeleteCacheSubnetGroup = "DeleteCacheSubnetGroup"
}
export declare enum GetDeleteCacheSubnetGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDeleteCacheSubnetGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteCacheSubnetGroupActionEnum;
    cacheSubnetGroupName: string;
    version: GetDeleteCacheSubnetGroupVersionEnum;
}
export declare class GetDeleteCacheSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteCacheSubnetGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteCacheSubnetGroupQueryParams;
    headers: GetDeleteCacheSubnetGroupHeaders;
}
export declare class GetDeleteCacheSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

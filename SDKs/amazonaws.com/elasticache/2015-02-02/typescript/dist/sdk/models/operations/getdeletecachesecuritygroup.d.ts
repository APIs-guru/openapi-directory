import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteCacheSecurityGroupActionEnum {
    DeleteCacheSecurityGroup = "DeleteCacheSecurityGroup"
}
export declare enum GetDeleteCacheSecurityGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDeleteCacheSecurityGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteCacheSecurityGroupActionEnum;
    cacheSecurityGroupName: string;
    version: GetDeleteCacheSecurityGroupVersionEnum;
}
export declare class GetDeleteCacheSecurityGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteCacheSecurityGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteCacheSecurityGroupQueryParams;
    headers: GetDeleteCacheSecurityGroupHeaders;
}
export declare class GetDeleteCacheSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

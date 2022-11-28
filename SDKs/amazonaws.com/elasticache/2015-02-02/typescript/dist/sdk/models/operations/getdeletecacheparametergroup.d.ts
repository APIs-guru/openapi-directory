import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteCacheParameterGroupActionEnum {
    DeleteCacheParameterGroup = "DeleteCacheParameterGroup"
}
export declare enum GetDeleteCacheParameterGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDeleteCacheParameterGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteCacheParameterGroupActionEnum;
    cacheParameterGroupName: string;
    version: GetDeleteCacheParameterGroupVersionEnum;
}
export declare class GetDeleteCacheParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteCacheParameterGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteCacheParameterGroupQueryParams;
    headers: GetDeleteCacheParameterGroupHeaders;
}
export declare class GetDeleteCacheParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

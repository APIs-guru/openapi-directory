import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostResetCacheParameterGroupActionEnum {
    ResetCacheParameterGroup = "ResetCacheParameterGroup"
}
export declare enum PostResetCacheParameterGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostResetCacheParameterGroupQueryParams extends SpeakeasyBase {
    action: PostResetCacheParameterGroupActionEnum;
    version: PostResetCacheParameterGroupVersionEnum;
}
export declare class PostResetCacheParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResetCacheParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostResetCacheParameterGroupQueryParams;
    headers: PostResetCacheParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostResetCacheParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

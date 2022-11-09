import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteCacheParameterGroupActionEnum {
    DeleteCacheParameterGroup = "DeleteCacheParameterGroup"
}
export declare enum PostDeleteCacheParameterGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDeleteCacheParameterGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteCacheParameterGroupActionEnum;
    version: PostDeleteCacheParameterGroupVersionEnum;
}
export declare class PostDeleteCacheParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteCacheParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteCacheParameterGroupQueryParams;
    headers: PostDeleteCacheParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteCacheParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

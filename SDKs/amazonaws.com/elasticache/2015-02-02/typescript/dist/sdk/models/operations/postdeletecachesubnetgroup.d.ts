import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteCacheSubnetGroupActionEnum {
    DeleteCacheSubnetGroup = "DeleteCacheSubnetGroup"
}
export declare enum PostDeleteCacheSubnetGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDeleteCacheSubnetGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteCacheSubnetGroupActionEnum;
    version: PostDeleteCacheSubnetGroupVersionEnum;
}
export declare class PostDeleteCacheSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteCacheSubnetGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteCacheSubnetGroupQueryParams;
    headers: PostDeleteCacheSubnetGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteCacheSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateCacheSubnetGroupActionEnum {
    CreateCacheSubnetGroup = "CreateCacheSubnetGroup"
}
export declare enum PostCreateCacheSubnetGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostCreateCacheSubnetGroupQueryParams extends SpeakeasyBase {
    action: PostCreateCacheSubnetGroupActionEnum;
    version: PostCreateCacheSubnetGroupVersionEnum;
}
export declare class PostCreateCacheSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateCacheSubnetGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateCacheSubnetGroupQueryParams;
    headers: PostCreateCacheSubnetGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateCacheSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyCacheSubnetGroupActionEnum {
    ModifyCacheSubnetGroup = "ModifyCacheSubnetGroup"
}
export declare enum PostModifyCacheSubnetGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostModifyCacheSubnetGroupQueryParams extends SpeakeasyBase {
    action: PostModifyCacheSubnetGroupActionEnum;
    version: PostModifyCacheSubnetGroupVersionEnum;
}
export declare class PostModifyCacheSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyCacheSubnetGroupRequest extends SpeakeasyBase {
    queryParams: PostModifyCacheSubnetGroupQueryParams;
    headers: PostModifyCacheSubnetGroupHeaders;
    request?: Uint8Array;
}
export declare class PostModifyCacheSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyCacheParameterGroupActionEnum {
    ModifyCacheParameterGroup = "ModifyCacheParameterGroup"
}
export declare enum PostModifyCacheParameterGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostModifyCacheParameterGroupQueryParams extends SpeakeasyBase {
    action: PostModifyCacheParameterGroupActionEnum;
    version: PostModifyCacheParameterGroupVersionEnum;
}
export declare class PostModifyCacheParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyCacheParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostModifyCacheParameterGroupQueryParams;
    headers: PostModifyCacheParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostModifyCacheParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

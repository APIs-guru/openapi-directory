import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyGlobalReplicationGroupActionEnum {
    ModifyGlobalReplicationGroup = "ModifyGlobalReplicationGroup"
}
export declare enum PostModifyGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostModifyGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: PostModifyGlobalReplicationGroupActionEnum;
    version: PostModifyGlobalReplicationGroupVersionEnum;
}
export declare class PostModifyGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: PostModifyGlobalReplicationGroupQueryParams;
    headers: PostModifyGlobalReplicationGroupHeaders;
    request?: Uint8Array;
}
export declare class PostModifyGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

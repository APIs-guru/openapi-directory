import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyReplicationGroupActionEnum {
    ModifyReplicationGroup = "ModifyReplicationGroup"
}
export declare enum PostModifyReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostModifyReplicationGroupQueryParams extends SpeakeasyBase {
    action: PostModifyReplicationGroupActionEnum;
    version: PostModifyReplicationGroupVersionEnum;
}
export declare class PostModifyReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyReplicationGroupRequest extends SpeakeasyBase {
    queryParams: PostModifyReplicationGroupQueryParams;
    headers: PostModifyReplicationGroupHeaders;
    request?: Uint8Array;
}
export declare class PostModifyReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

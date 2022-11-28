import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateGlobalReplicationGroupActionEnum {
    CreateGlobalReplicationGroup = "CreateGlobalReplicationGroup"
}
export declare enum PostCreateGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostCreateGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: PostCreateGlobalReplicationGroupActionEnum;
    version: PostCreateGlobalReplicationGroupVersionEnum;
}
export declare class PostCreateGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateGlobalReplicationGroupQueryParams;
    headers: PostCreateGlobalReplicationGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

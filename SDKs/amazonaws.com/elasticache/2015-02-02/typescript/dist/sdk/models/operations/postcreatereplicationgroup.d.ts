import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateReplicationGroupActionEnum {
    CreateReplicationGroup = "CreateReplicationGroup"
}
export declare enum PostCreateReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostCreateReplicationGroupQueryParams extends SpeakeasyBase {
    action: PostCreateReplicationGroupActionEnum;
    version: PostCreateReplicationGroupVersionEnum;
}
export declare class PostCreateReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateReplicationGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateReplicationGroupQueryParams;
    headers: PostCreateReplicationGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostFailoverGlobalReplicationGroupActionEnum {
    FailoverGlobalReplicationGroup = "FailoverGlobalReplicationGroup"
}
export declare enum PostFailoverGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostFailoverGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: PostFailoverGlobalReplicationGroupActionEnum;
    version: PostFailoverGlobalReplicationGroupVersionEnum;
}
export declare class PostFailoverGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostFailoverGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: PostFailoverGlobalReplicationGroupQueryParams;
    headers: PostFailoverGlobalReplicationGroupHeaders;
    request?: Uint8Array;
}
export declare class PostFailoverGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

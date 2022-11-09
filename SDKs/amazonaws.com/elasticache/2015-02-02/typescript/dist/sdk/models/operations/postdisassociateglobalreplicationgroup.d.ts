import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDisassociateGlobalReplicationGroupActionEnum {
    DisassociateGlobalReplicationGroup = "DisassociateGlobalReplicationGroup"
}
export declare enum PostDisassociateGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDisassociateGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: PostDisassociateGlobalReplicationGroupActionEnum;
    version: PostDisassociateGlobalReplicationGroupVersionEnum;
}
export declare class PostDisassociateGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisassociateGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: PostDisassociateGlobalReplicationGroupQueryParams;
    headers: PostDisassociateGlobalReplicationGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDisassociateGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

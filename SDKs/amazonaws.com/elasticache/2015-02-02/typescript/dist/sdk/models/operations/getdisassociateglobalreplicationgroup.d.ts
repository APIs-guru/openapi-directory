import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDisassociateGlobalReplicationGroupActionEnum {
    DisassociateGlobalReplicationGroup = "DisassociateGlobalReplicationGroup"
}
export declare enum GetDisassociateGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDisassociateGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: GetDisassociateGlobalReplicationGroupActionEnum;
    globalReplicationGroupId: string;
    replicationGroupId: string;
    replicationGroupRegion: string;
    version: GetDisassociateGlobalReplicationGroupVersionEnum;
}
export declare class GetDisassociateGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisassociateGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: GetDisassociateGlobalReplicationGroupQueryParams;
    headers: GetDisassociateGlobalReplicationGroupHeaders;
}
export declare class GetDisassociateGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

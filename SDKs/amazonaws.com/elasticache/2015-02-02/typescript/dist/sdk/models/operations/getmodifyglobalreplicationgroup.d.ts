import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyGlobalReplicationGroupActionEnum {
    ModifyGlobalReplicationGroup = "ModifyGlobalReplicationGroup"
}
export declare enum GetModifyGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetModifyGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: GetModifyGlobalReplicationGroupActionEnum;
    applyImmediately: boolean;
    automaticFailoverEnabled?: boolean;
    cacheNodeType?: string;
    cacheParameterGroupName?: string;
    engineVersion?: string;
    globalReplicationGroupDescription?: string;
    globalReplicationGroupId: string;
    version: GetModifyGlobalReplicationGroupVersionEnum;
}
export declare class GetModifyGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: GetModifyGlobalReplicationGroupQueryParams;
    headers: GetModifyGlobalReplicationGroupHeaders;
}
export declare class GetModifyGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

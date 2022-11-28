import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteGlobalReplicationGroupActionEnum {
    DeleteGlobalReplicationGroup = "DeleteGlobalReplicationGroup"
}
export declare enum GetDeleteGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDeleteGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteGlobalReplicationGroupActionEnum;
    globalReplicationGroupId: string;
    retainPrimaryReplicationGroup: boolean;
    version: GetDeleteGlobalReplicationGroupVersionEnum;
}
export declare class GetDeleteGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteGlobalReplicationGroupQueryParams;
    headers: GetDeleteGlobalReplicationGroupHeaders;
}
export declare class GetDeleteGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

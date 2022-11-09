import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteReplicationGroupActionEnum {
    DeleteReplicationGroup = "DeleteReplicationGroup"
}
export declare enum GetDeleteReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDeleteReplicationGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteReplicationGroupActionEnum;
    finalSnapshotIdentifier?: string;
    replicationGroupId: string;
    retainPrimaryCluster?: boolean;
    version: GetDeleteReplicationGroupVersionEnum;
}
export declare class GetDeleteReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteReplicationGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteReplicationGroupQueryParams;
    headers: GetDeleteReplicationGroupHeaders;
}
export declare class GetDeleteReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

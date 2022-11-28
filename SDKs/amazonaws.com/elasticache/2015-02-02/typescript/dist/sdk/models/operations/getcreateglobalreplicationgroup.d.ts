import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateGlobalReplicationGroupActionEnum {
    CreateGlobalReplicationGroup = "CreateGlobalReplicationGroup"
}
export declare enum GetCreateGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetCreateGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: GetCreateGlobalReplicationGroupActionEnum;
    globalReplicationGroupDescription?: string;
    globalReplicationGroupIdSuffix: string;
    primaryReplicationGroupId: string;
    version: GetCreateGlobalReplicationGroupVersionEnum;
}
export declare class GetCreateGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: GetCreateGlobalReplicationGroupQueryParams;
    headers: GetCreateGlobalReplicationGroupHeaders;
}
export declare class GetCreateGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

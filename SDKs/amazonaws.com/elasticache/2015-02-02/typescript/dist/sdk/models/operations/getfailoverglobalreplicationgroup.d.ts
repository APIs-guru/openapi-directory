import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetFailoverGlobalReplicationGroupActionEnum {
    FailoverGlobalReplicationGroup = "FailoverGlobalReplicationGroup"
}
export declare enum GetFailoverGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetFailoverGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: GetFailoverGlobalReplicationGroupActionEnum;
    globalReplicationGroupId: string;
    primaryRegion: string;
    primaryReplicationGroupId: string;
    version: GetFailoverGlobalReplicationGroupVersionEnum;
}
export declare class GetFailoverGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFailoverGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: GetFailoverGlobalReplicationGroupQueryParams;
    headers: GetFailoverGlobalReplicationGroupHeaders;
}
export declare class GetFailoverGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

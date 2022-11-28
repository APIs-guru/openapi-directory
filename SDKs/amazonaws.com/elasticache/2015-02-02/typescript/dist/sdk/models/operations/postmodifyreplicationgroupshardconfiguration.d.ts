import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyReplicationGroupShardConfigurationActionEnum {
    ModifyReplicationGroupShardConfiguration = "ModifyReplicationGroupShardConfiguration"
}
export declare enum PostModifyReplicationGroupShardConfigurationVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostModifyReplicationGroupShardConfigurationQueryParams extends SpeakeasyBase {
    action: PostModifyReplicationGroupShardConfigurationActionEnum;
    version: PostModifyReplicationGroupShardConfigurationVersionEnum;
}
export declare class PostModifyReplicationGroupShardConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyReplicationGroupShardConfigurationRequest extends SpeakeasyBase {
    queryParams: PostModifyReplicationGroupShardConfigurationQueryParams;
    headers: PostModifyReplicationGroupShardConfigurationHeaders;
    request?: Uint8Array;
}
export declare class PostModifyReplicationGroupShardConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

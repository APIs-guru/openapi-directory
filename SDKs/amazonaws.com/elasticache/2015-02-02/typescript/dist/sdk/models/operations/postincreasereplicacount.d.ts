import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostIncreaseReplicaCountActionEnum {
    IncreaseReplicaCount = "IncreaseReplicaCount"
}
export declare enum PostIncreaseReplicaCountVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostIncreaseReplicaCountQueryParams extends SpeakeasyBase {
    action: PostIncreaseReplicaCountActionEnum;
    version: PostIncreaseReplicaCountVersionEnum;
}
export declare class PostIncreaseReplicaCountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostIncreaseReplicaCountRequest extends SpeakeasyBase {
    queryParams: PostIncreaseReplicaCountQueryParams;
    headers: PostIncreaseReplicaCountHeaders;
    request?: Uint8Array;
}
export declare class PostIncreaseReplicaCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

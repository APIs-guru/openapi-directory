import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDecreaseReplicaCountActionEnum {
    DecreaseReplicaCount = "DecreaseReplicaCount"
}
export declare enum PostDecreaseReplicaCountVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDecreaseReplicaCountQueryParams extends SpeakeasyBase {
    action: PostDecreaseReplicaCountActionEnum;
    version: PostDecreaseReplicaCountVersionEnum;
}
export declare class PostDecreaseReplicaCountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDecreaseReplicaCountRequest extends SpeakeasyBase {
    queryParams: PostDecreaseReplicaCountQueryParams;
    headers: PostDecreaseReplicaCountHeaders;
    request?: Uint8Array;
}
export declare class PostDecreaseReplicaCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

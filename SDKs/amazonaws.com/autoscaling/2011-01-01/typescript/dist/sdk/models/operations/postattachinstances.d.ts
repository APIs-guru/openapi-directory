import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAttachInstancesActionEnum {
    AttachInstances = "AttachInstances"
}
export declare enum PostAttachInstancesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostAttachInstancesQueryParams extends SpeakeasyBase {
    action: PostAttachInstancesActionEnum;
    version: PostAttachInstancesVersionEnum;
}
export declare class PostAttachInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAttachInstancesRequest extends SpeakeasyBase {
    queryParams: PostAttachInstancesQueryParams;
    headers: PostAttachInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostAttachInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

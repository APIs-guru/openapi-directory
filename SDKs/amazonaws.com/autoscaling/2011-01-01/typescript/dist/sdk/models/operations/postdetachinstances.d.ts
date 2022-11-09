import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDetachInstancesActionEnum {
    DetachInstances = "DetachInstances"
}
export declare enum PostDetachInstancesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDetachInstancesQueryParams extends SpeakeasyBase {
    action: PostDetachInstancesActionEnum;
    version: PostDetachInstancesVersionEnum;
}
export declare class PostDetachInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDetachInstancesRequest extends SpeakeasyBase {
    queryParams: PostDetachInstancesQueryParams;
    headers: PostDetachInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostDetachInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAbortEnvironmentUpdateActionEnum {
    AbortEnvironmentUpdate = "AbortEnvironmentUpdate"
}
export declare enum PostAbortEnvironmentUpdateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostAbortEnvironmentUpdateQueryParams extends SpeakeasyBase {
    action: PostAbortEnvironmentUpdateActionEnum;
    version: PostAbortEnvironmentUpdateVersionEnum;
}
export declare class PostAbortEnvironmentUpdateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAbortEnvironmentUpdateRequest extends SpeakeasyBase {
    queryParams: PostAbortEnvironmentUpdateQueryParams;
    headers: PostAbortEnvironmentUpdateHeaders;
    request?: Uint8Array;
}
export declare class PostAbortEnvironmentUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

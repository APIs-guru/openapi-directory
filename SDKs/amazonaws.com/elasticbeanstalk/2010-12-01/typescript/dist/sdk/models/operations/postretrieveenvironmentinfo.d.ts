import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRetrieveEnvironmentInfoActionEnum {
    RetrieveEnvironmentInfo = "RetrieveEnvironmentInfo"
}
export declare enum PostRetrieveEnvironmentInfoVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostRetrieveEnvironmentInfoQueryParams extends SpeakeasyBase {
    action: PostRetrieveEnvironmentInfoActionEnum;
    version: PostRetrieveEnvironmentInfoVersionEnum;
}
export declare class PostRetrieveEnvironmentInfoHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRetrieveEnvironmentInfoRequest extends SpeakeasyBase {
    queryParams: PostRetrieveEnvironmentInfoQueryParams;
    headers: PostRetrieveEnvironmentInfoHeaders;
    request?: Uint8Array;
}
export declare class PostRetrieveEnvironmentInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

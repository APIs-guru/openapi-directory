import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateEnvironmentActionEnum {
    UpdateEnvironment = "UpdateEnvironment"
}
export declare enum PostUpdateEnvironmentVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostUpdateEnvironmentQueryParams extends SpeakeasyBase {
    action: PostUpdateEnvironmentActionEnum;
    version: PostUpdateEnvironmentVersionEnum;
}
export declare class PostUpdateEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateEnvironmentRequest extends SpeakeasyBase {
    queryParams: PostUpdateEnvironmentQueryParams;
    headers: PostUpdateEnvironmentHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateEnvironmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

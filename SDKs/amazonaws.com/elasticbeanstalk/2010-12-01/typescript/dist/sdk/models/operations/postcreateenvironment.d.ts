import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateEnvironmentActionEnum {
    CreateEnvironment = "CreateEnvironment"
}
export declare enum PostCreateEnvironmentVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCreateEnvironmentQueryParams extends SpeakeasyBase {
    action: PostCreateEnvironmentActionEnum;
    version: PostCreateEnvironmentVersionEnum;
}
export declare class PostCreateEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateEnvironmentRequest extends SpeakeasyBase {
    queryParams: PostCreateEnvironmentQueryParams;
    headers: PostCreateEnvironmentHeaders;
    request?: Uint8Array;
}
export declare class PostCreateEnvironmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

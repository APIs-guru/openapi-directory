import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostTerminateEnvironmentActionEnum {
    TerminateEnvironment = "TerminateEnvironment"
}
export declare enum PostTerminateEnvironmentVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostTerminateEnvironmentQueryParams extends SpeakeasyBase {
    action: PostTerminateEnvironmentActionEnum;
    version: PostTerminateEnvironmentVersionEnum;
}
export declare class PostTerminateEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTerminateEnvironmentRequest extends SpeakeasyBase {
    queryParams: PostTerminateEnvironmentQueryParams;
    headers: PostTerminateEnvironmentHeaders;
    request?: Uint8Array;
}
export declare class PostTerminateEnvironmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

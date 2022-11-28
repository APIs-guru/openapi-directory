import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostConfigureHealthCheckActionEnum {
    ConfigureHealthCheck = "ConfigureHealthCheck"
}
export declare enum PostConfigureHealthCheckVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostConfigureHealthCheckQueryParams extends SpeakeasyBase {
    action: PostConfigureHealthCheckActionEnum;
    version: PostConfigureHealthCheckVersionEnum;
}
export declare class PostConfigureHealthCheckHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostConfigureHealthCheckRequest extends SpeakeasyBase {
    queryParams: PostConfigureHealthCheckQueryParams;
    headers: PostConfigureHealthCheckHeaders;
    request?: Uint8Array;
}
export declare class PostConfigureHealthCheckResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

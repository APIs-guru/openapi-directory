import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRequestEnvironmentInfoActionEnum {
    RequestEnvironmentInfo = "RequestEnvironmentInfo"
}
export declare enum PostRequestEnvironmentInfoVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostRequestEnvironmentInfoQueryParams extends SpeakeasyBase {
    action: PostRequestEnvironmentInfoActionEnum;
    version: PostRequestEnvironmentInfoVersionEnum;
}
export declare class PostRequestEnvironmentInfoHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRequestEnvironmentInfoRequest extends SpeakeasyBase {
    queryParams: PostRequestEnvironmentInfoQueryParams;
    headers: PostRequestEnvironmentInfoHeaders;
    request?: Uint8Array;
}
export declare class PostRequestEnvironmentInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

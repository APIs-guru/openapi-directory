import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRequestEnvironmentInfoActionEnum {
    RequestEnvironmentInfo = "RequestEnvironmentInfo"
}
export declare enum GetRequestEnvironmentInfoInfoTypeEnum {
    Tail = "tail",
    Bundle = "bundle"
}
export declare enum GetRequestEnvironmentInfoVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetRequestEnvironmentInfoQueryParams extends SpeakeasyBase {
    action: GetRequestEnvironmentInfoActionEnum;
    environmentId?: string;
    environmentName?: string;
    infoType: GetRequestEnvironmentInfoInfoTypeEnum;
    version: GetRequestEnvironmentInfoVersionEnum;
}
export declare class GetRequestEnvironmentInfoHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRequestEnvironmentInfoRequest extends SpeakeasyBase {
    queryParams: GetRequestEnvironmentInfoQueryParams;
    headers: GetRequestEnvironmentInfoHeaders;
}
export declare class GetRequestEnvironmentInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

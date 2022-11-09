import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRetrieveEnvironmentInfoActionEnum {
    RetrieveEnvironmentInfo = "RetrieveEnvironmentInfo"
}
export declare enum GetRetrieveEnvironmentInfoInfoTypeEnum {
    Tail = "tail",
    Bundle = "bundle"
}
export declare enum GetRetrieveEnvironmentInfoVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetRetrieveEnvironmentInfoQueryParams extends SpeakeasyBase {
    action: GetRetrieveEnvironmentInfoActionEnum;
    environmentId?: string;
    environmentName?: string;
    infoType: GetRetrieveEnvironmentInfoInfoTypeEnum;
    version: GetRetrieveEnvironmentInfoVersionEnum;
}
export declare class GetRetrieveEnvironmentInfoHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRetrieveEnvironmentInfoRequest extends SpeakeasyBase {
    queryParams: GetRetrieveEnvironmentInfoQueryParams;
    headers: GetRetrieveEnvironmentInfoHeaders;
}
export declare class GetRetrieveEnvironmentInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAbortEnvironmentUpdateActionEnum {
    AbortEnvironmentUpdate = "AbortEnvironmentUpdate"
}
export declare enum GetAbortEnvironmentUpdateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetAbortEnvironmentUpdateQueryParams extends SpeakeasyBase {
    action: GetAbortEnvironmentUpdateActionEnum;
    environmentId?: string;
    environmentName?: string;
    version: GetAbortEnvironmentUpdateVersionEnum;
}
export declare class GetAbortEnvironmentUpdateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAbortEnvironmentUpdateRequest extends SpeakeasyBase {
    queryParams: GetAbortEnvironmentUpdateQueryParams;
    headers: GetAbortEnvironmentUpdateHeaders;
}
export declare class GetAbortEnvironmentUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

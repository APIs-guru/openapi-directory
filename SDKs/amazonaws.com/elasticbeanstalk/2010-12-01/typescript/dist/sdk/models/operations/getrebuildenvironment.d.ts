import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRebuildEnvironmentActionEnum {
    RebuildEnvironment = "RebuildEnvironment"
}
export declare enum GetRebuildEnvironmentVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetRebuildEnvironmentQueryParams extends SpeakeasyBase {
    action: GetRebuildEnvironmentActionEnum;
    environmentId?: string;
    environmentName?: string;
    version: GetRebuildEnvironmentVersionEnum;
}
export declare class GetRebuildEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRebuildEnvironmentRequest extends SpeakeasyBase {
    queryParams: GetRebuildEnvironmentQueryParams;
    headers: GetRebuildEnvironmentHeaders;
}
export declare class GetRebuildEnvironmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

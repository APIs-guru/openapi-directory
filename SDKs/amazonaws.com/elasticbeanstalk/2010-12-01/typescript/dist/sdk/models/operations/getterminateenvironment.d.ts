import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetTerminateEnvironmentActionEnum {
    TerminateEnvironment = "TerminateEnvironment"
}
export declare enum GetTerminateEnvironmentVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetTerminateEnvironmentQueryParams extends SpeakeasyBase {
    action: GetTerminateEnvironmentActionEnum;
    environmentId?: string;
    environmentName?: string;
    forceTerminate?: boolean;
    terminateResources?: boolean;
    version: GetTerminateEnvironmentVersionEnum;
}
export declare class GetTerminateEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTerminateEnvironmentRequest extends SpeakeasyBase {
    queryParams: GetTerminateEnvironmentQueryParams;
    headers: GetTerminateEnvironmentHeaders;
}
export declare class GetTerminateEnvironmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

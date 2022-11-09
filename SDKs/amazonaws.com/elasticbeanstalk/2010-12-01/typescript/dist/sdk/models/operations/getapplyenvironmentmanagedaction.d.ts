import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetApplyEnvironmentManagedActionActionEnum {
    ApplyEnvironmentManagedAction = "ApplyEnvironmentManagedAction"
}
export declare enum GetApplyEnvironmentManagedActionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetApplyEnvironmentManagedActionQueryParams extends SpeakeasyBase {
    action: GetApplyEnvironmentManagedActionActionEnum;
    actionId: string;
    environmentId?: string;
    environmentName?: string;
    version: GetApplyEnvironmentManagedActionVersionEnum;
}
export declare class GetApplyEnvironmentManagedActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApplyEnvironmentManagedActionRequest extends SpeakeasyBase {
    queryParams: GetApplyEnvironmentManagedActionQueryParams;
    headers: GetApplyEnvironmentManagedActionHeaders;
}
export declare class GetApplyEnvironmentManagedActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBackendEnvironmentPathParams extends SpeakeasyBase {
    appId: string;
    environmentName: string;
}
export declare class GetBackendEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBackendEnvironmentRequest extends SpeakeasyBase {
    pathParams: GetBackendEnvironmentPathParams;
    headers: GetBackendEnvironmentHeaders;
}
export declare class GetBackendEnvironmentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getBackendEnvironmentResult?: shared.GetBackendEnvironmentResult;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}

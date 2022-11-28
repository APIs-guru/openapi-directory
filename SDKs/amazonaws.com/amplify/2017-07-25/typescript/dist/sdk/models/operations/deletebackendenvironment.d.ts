import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBackendEnvironmentPathParams extends SpeakeasyBase {
    appId: string;
    environmentName: string;
}
export declare class DeleteBackendEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBackendEnvironmentRequest extends SpeakeasyBase {
    pathParams: DeleteBackendEnvironmentPathParams;
    headers: DeleteBackendEnvironmentHeaders;
}
export declare class DeleteBackendEnvironmentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteBackendEnvironmentResult?: shared.DeleteBackendEnvironmentResult;
    dependentServiceFailureException?: any;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}

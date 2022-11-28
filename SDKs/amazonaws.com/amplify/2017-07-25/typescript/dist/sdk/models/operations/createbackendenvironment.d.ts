import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBackendEnvironmentPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class CreateBackendEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateBackendEnvironmentRequestBody extends SpeakeasyBase {
    deploymentArtifacts?: string;
    environmentName: string;
    stackName?: string;
}
export declare class CreateBackendEnvironmentRequest extends SpeakeasyBase {
    pathParams: CreateBackendEnvironmentPathParams;
    headers: CreateBackendEnvironmentHeaders;
    request: CreateBackendEnvironmentRequestBody;
}
export declare class CreateBackendEnvironmentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createBackendEnvironmentResult?: shared.CreateBackendEnvironmentResult;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}

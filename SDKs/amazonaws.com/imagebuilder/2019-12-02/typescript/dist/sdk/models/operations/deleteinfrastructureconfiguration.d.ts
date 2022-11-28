import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteInfrastructureConfigurationQueryParams extends SpeakeasyBase {
    infrastructureConfigurationArn: string;
}
export declare class DeleteInfrastructureConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteInfrastructureConfigurationRequest extends SpeakeasyBase {
    queryParams: DeleteInfrastructureConfigurationQueryParams;
    headers: DeleteInfrastructureConfigurationHeaders;
}
export declare class DeleteInfrastructureConfigurationResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    deleteInfrastructureConfigurationResponse?: shared.DeleteInfrastructureConfigurationResponse;
    forbiddenException?: any;
    invalidRequestException?: any;
    resourceDependencyException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}

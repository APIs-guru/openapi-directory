import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateServiceIntegrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  Information about updating the integration status of an AWS service, such as AWS Systems Manager, with DevOps Guru.
**/
export declare class UpdateServiceIntegrationRequestBodyServiceIntegration extends SpeakeasyBase {
    opsCenter?: shared.OpsCenterIntegrationConfig;
}
export declare class UpdateServiceIntegrationRequestBody extends SpeakeasyBase {
    serviceIntegration: UpdateServiceIntegrationRequestBodyServiceIntegration;
}
export declare class UpdateServiceIntegrationRequest extends SpeakeasyBase {
    headers: UpdateServiceIntegrationHeaders;
    request: UpdateServiceIntegrationRequestBody;
}
export declare class UpdateServiceIntegrationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    updateServiceIntegrationResponse?: Map<string, any>;
    validationException?: any;
}

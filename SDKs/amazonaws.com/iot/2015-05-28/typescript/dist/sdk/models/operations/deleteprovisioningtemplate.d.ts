import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProvisioningTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class DeleteProvisioningTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteProvisioningTemplateRequest extends SpeakeasyBase {
    pathParams: DeleteProvisioningTemplatePathParams;
    headers: DeleteProvisioningTemplateHeaders;
}
export declare class DeleteProvisioningTemplateResponse extends SpeakeasyBase {
    conflictingResourceUpdateException?: any;
    contentType: string;
    deleteConflictException?: any;
    deleteProvisioningTemplateResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}

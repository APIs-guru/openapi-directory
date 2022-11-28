import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateProvisioningTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class UpdateProvisioningTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
**/
export declare class UpdateProvisioningTemplateRequestBodyPreProvisioningHook extends SpeakeasyBase {
    payloadVersion?: string;
    targetArn?: string;
}
export declare class UpdateProvisioningTemplateRequestBody extends SpeakeasyBase {
    defaultVersionId?: number;
    description?: string;
    enabled?: boolean;
    preProvisioningHook?: UpdateProvisioningTemplateRequestBodyPreProvisioningHook;
    provisioningRoleArn?: string;
    removePreProvisioningHook?: boolean;
}
export declare class UpdateProvisioningTemplateRequest extends SpeakeasyBase {
    pathParams: UpdateProvisioningTemplatePathParams;
    headers: UpdateProvisioningTemplateHeaders;
    request: UpdateProvisioningTemplateRequestBody;
}
export declare class UpdateProvisioningTemplateResponse extends SpeakeasyBase {
    conflictingResourceUpdateException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateProvisioningTemplateResponse?: Map<string, any>;
}

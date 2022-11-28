import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProvisioningTemplateVersionPathParams extends SpeakeasyBase {
    templateName: string;
    versionId: number;
}
export declare class DeleteProvisioningTemplateVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteProvisioningTemplateVersionRequest extends SpeakeasyBase {
    pathParams: DeleteProvisioningTemplateVersionPathParams;
    headers: DeleteProvisioningTemplateVersionHeaders;
}
export declare class DeleteProvisioningTemplateVersionResponse extends SpeakeasyBase {
    conflictingResourceUpdateException?: any;
    contentType: string;
    deleteConflictException?: any;
    deleteProvisioningTemplateVersionResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}

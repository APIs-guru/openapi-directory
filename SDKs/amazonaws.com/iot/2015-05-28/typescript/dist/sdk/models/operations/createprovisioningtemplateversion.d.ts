import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProvisioningTemplateVersionPathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class CreateProvisioningTemplateVersionQueryParams extends SpeakeasyBase {
    setAsDefault?: boolean;
}
export declare class CreateProvisioningTemplateVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateProvisioningTemplateVersionRequestBody extends SpeakeasyBase {
    templateBody: string;
}
export declare class CreateProvisioningTemplateVersionRequest extends SpeakeasyBase {
    pathParams: CreateProvisioningTemplateVersionPathParams;
    queryParams: CreateProvisioningTemplateVersionQueryParams;
    headers: CreateProvisioningTemplateVersionHeaders;
    request: CreateProvisioningTemplateVersionRequestBody;
}
export declare class CreateProvisioningTemplateVersionResponse extends SpeakeasyBase {
    conflictingResourceUpdateException?: any;
    contentType: string;
    createProvisioningTemplateVersionResponse?: shared.CreateProvisioningTemplateVersionResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    versionsLimitExceededException?: any;
}

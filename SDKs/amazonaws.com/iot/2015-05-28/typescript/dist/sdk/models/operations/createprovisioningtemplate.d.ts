import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProvisioningTemplateHeaders extends SpeakeasyBase {
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
export declare class CreateProvisioningTemplateRequestBodyPreProvisioningHook extends SpeakeasyBase {
    payloadVersion?: string;
    targetArn?: string;
}
export declare class CreateProvisioningTemplateRequestBody extends SpeakeasyBase {
    description?: string;
    enabled?: boolean;
    preProvisioningHook?: CreateProvisioningTemplateRequestBodyPreProvisioningHook;
    provisioningRoleArn: string;
    tags?: shared.Tag[];
    templateBody: string;
    templateName: string;
}
export declare class CreateProvisioningTemplateRequest extends SpeakeasyBase {
    headers: CreateProvisioningTemplateHeaders;
    request: CreateProvisioningTemplateRequestBody;
}
export declare class CreateProvisioningTemplateResponse extends SpeakeasyBase {
    contentType: string;
    createProvisioningTemplateResponse?: shared.CreateProvisioningTemplateResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}

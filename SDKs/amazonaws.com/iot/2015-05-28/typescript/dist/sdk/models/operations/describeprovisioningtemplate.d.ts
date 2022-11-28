import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeProvisioningTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class DescribeProvisioningTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeProvisioningTemplateRequest extends SpeakeasyBase {
    pathParams: DescribeProvisioningTemplatePathParams;
    headers: DescribeProvisioningTemplateHeaders;
}
export declare class DescribeProvisioningTemplateResponse extends SpeakeasyBase {
    contentType: string;
    describeProvisioningTemplateResponse?: shared.DescribeProvisioningTemplateResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeProvisioningTemplateVersionPathParams extends SpeakeasyBase {
    templateName: string;
    versionId: number;
}
export declare class DescribeProvisioningTemplateVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeProvisioningTemplateVersionRequest extends SpeakeasyBase {
    pathParams: DescribeProvisioningTemplateVersionPathParams;
    headers: DescribeProvisioningTemplateVersionHeaders;
}
export declare class DescribeProvisioningTemplateVersionResponse extends SpeakeasyBase {
    contentType: string;
    describeProvisioningTemplateVersionResponse?: shared.DescribeProvisioningTemplateVersionResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}

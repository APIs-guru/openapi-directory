import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProvisioningTemplateVersionsPathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class ListProvisioningTemplateVersionsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListProvisioningTemplateVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListProvisioningTemplateVersionsRequest extends SpeakeasyBase {
    pathParams: ListProvisioningTemplateVersionsPathParams;
    queryParams: ListProvisioningTemplateVersionsQueryParams;
    headers: ListProvisioningTemplateVersionsHeaders;
}
export declare class ListProvisioningTemplateVersionsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listProvisioningTemplateVersionsResponse?: shared.ListProvisioningTemplateVersionsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}

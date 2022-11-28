import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProvisioningTemplatesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListProvisioningTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListProvisioningTemplatesRequest extends SpeakeasyBase {
    queryParams: ListProvisioningTemplatesQueryParams;
    headers: ListProvisioningTemplatesHeaders;
}
export declare class ListProvisioningTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listProvisioningTemplatesResponse?: shared.ListProvisioningTemplatesResponse;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}

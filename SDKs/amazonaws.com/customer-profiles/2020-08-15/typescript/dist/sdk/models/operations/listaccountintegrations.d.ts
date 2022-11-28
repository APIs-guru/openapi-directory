import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAccountIntegrationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAccountIntegrationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAccountIntegrationsRequestBody extends SpeakeasyBase {
    uri: string;
}
export declare class ListAccountIntegrationsRequest extends SpeakeasyBase {
    queryParams: ListAccountIntegrationsQueryParams;
    headers: ListAccountIntegrationsHeaders;
    request: ListAccountIntegrationsRequestBody;
}
export declare class ListAccountIntegrationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    internalServerException?: any;
    listAccountIntegrationsResponse?: shared.ListAccountIntegrationsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}

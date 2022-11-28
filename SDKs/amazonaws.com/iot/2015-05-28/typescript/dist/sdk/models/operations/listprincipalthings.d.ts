import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPrincipalThingsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListPrincipalThingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznPrincipal: string;
}
export declare class ListPrincipalThingsRequest extends SpeakeasyBase {
    queryParams: ListPrincipalThingsQueryParams;
    headers: ListPrincipalThingsHeaders;
}
export declare class ListPrincipalThingsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listPrincipalThingsResponse?: shared.ListPrincipalThingsResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}

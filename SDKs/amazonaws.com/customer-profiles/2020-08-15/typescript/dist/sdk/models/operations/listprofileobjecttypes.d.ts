import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProfileObjectTypesPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ListProfileObjectTypesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListProfileObjectTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListProfileObjectTypesRequest extends SpeakeasyBase {
    pathParams: ListProfileObjectTypesPathParams;
    queryParams: ListProfileObjectTypesQueryParams;
    headers: ListProfileObjectTypesHeaders;
}
export declare class ListProfileObjectTypesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    internalServerException?: any;
    listProfileObjectTypesResponse?: shared.ListProfileObjectTypesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}

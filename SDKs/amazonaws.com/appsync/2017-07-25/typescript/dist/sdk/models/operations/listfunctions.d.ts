import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListFunctionsPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class ListFunctionsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListFunctionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFunctionsRequest extends SpeakeasyBase {
    pathParams: ListFunctionsPathParams;
    queryParams: ListFunctionsQueryParams;
    headers: ListFunctionsHeaders;
}
export declare class ListFunctionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    listFunctionsResponse?: shared.ListFunctionsResponse;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}

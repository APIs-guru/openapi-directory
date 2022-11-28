import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResolversPathParams extends SpeakeasyBase {
    apiId: string;
    typeName: string;
}
export declare class ListResolversQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListResolversHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListResolversRequest extends SpeakeasyBase {
    pathParams: ListResolversPathParams;
    queryParams: ListResolversQueryParams;
    headers: ListResolversHeaders;
}
export declare class ListResolversResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    listResolversResponse?: shared.ListResolversResponse;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}

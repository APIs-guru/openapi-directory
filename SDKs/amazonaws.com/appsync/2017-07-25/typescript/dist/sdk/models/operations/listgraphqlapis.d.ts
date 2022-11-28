import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListGraphqlApisQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListGraphqlApisHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListGraphqlApisRequest extends SpeakeasyBase {
    queryParams: ListGraphqlApisQueryParams;
    headers: ListGraphqlApisHeaders;
}
export declare class ListGraphqlApisResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    listGraphqlApisResponse?: shared.ListGraphqlApisResponse;
    statusCode: number;
    unauthorizedException?: any;
}

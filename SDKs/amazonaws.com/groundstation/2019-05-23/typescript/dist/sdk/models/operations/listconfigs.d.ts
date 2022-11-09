import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListConfigsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListConfigsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListConfigsRequest extends SpeakeasyBase {
    queryParams: ListConfigsQueryParams;
    headers: ListConfigsHeaders;
}
export declare class ListConfigsResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    invalidParameterException?: any;
    listConfigsResponse?: shared.ListConfigsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListResourceDefinitionVersionsPathParams extends SpeakeasyBase {
    resourceDefinitionId: string;
}
export declare class ListResourceDefinitionVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListResourceDefinitionVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListResourceDefinitionVersionsRequest extends SpeakeasyBase {
    pathParams: ListResourceDefinitionVersionsPathParams;
    queryParams: ListResourceDefinitionVersionsQueryParams;
    headers: ListResourceDefinitionVersionsHeaders;
}
export declare class ListResourceDefinitionVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listResourceDefinitionVersionsResponse?: shared.ListResourceDefinitionVersionsResponse;
    statusCode: number;
}

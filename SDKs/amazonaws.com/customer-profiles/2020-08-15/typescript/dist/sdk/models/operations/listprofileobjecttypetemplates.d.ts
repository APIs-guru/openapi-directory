import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProfileObjectTypeTemplatesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListProfileObjectTypeTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListProfileObjectTypeTemplatesRequest extends SpeakeasyBase {
    queryParams: ListProfileObjectTypeTemplatesQueryParams;
    headers: ListProfileObjectTypeTemplatesHeaders;
}
export declare class ListProfileObjectTypeTemplatesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    internalServerException?: any;
    listProfileObjectTypeTemplatesResponse?: shared.ListProfileObjectTypeTemplatesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}

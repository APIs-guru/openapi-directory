import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListJobTemplatesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListJobTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListJobTemplatesRequest extends SpeakeasyBase {
    queryParams: ListJobTemplatesQueryParams;
    headers: ListJobTemplatesHeaders;
}
export declare class ListJobTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listJobTemplatesResponse?: shared.ListJobTemplatesResponse;
    statusCode: number;
    throttlingException?: any;
}

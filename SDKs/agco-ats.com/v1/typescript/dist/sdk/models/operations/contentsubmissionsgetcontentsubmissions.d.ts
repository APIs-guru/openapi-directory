import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentSubmissionsGetContentSubmissionsQueryParams extends SpeakeasyBase {
    contentDefinitionId?: number;
    includeAttributes?: string;
    includeDefinition?: boolean;
    limit?: number;
    offset?: number;
    releaseId?: number;
    typeId?: number;
    userId?: number;
    version?: number;
}
export declare class ContentSubmissionsGetContentSubmissionsRequest extends SpeakeasyBase {
    queryParams: ContentSubmissionsGetContentSubmissionsQueryParams;
}
export declare class ContentSubmissionsGetContentSubmissionsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission;
    contentType: string;
    statusCode: number;
}

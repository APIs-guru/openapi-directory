import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentSubmissionsGetContentSubmissionAttributesPathParams extends SpeakeasyBase {
    contentSubmissionId: number;
}
export declare class ContentSubmissionsGetContentSubmissionAttributesQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
}
export declare class ContentSubmissionsGetContentSubmissionAttributesRequest extends SpeakeasyBase {
    pathParams: ContentSubmissionsGetContentSubmissionAttributesPathParams;
    queryParams: ContentSubmissionsGetContentSubmissionAttributesQueryParams;
}
export declare class ContentSubmissionsGetContentSubmissionAttributesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;
    contentType: string;
    statusCode: number;
}

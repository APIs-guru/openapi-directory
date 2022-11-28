import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDefinitionsGetContentDefinitionsQueryParams extends SpeakeasyBase {
    includeAttributes?: string;
    limit?: number;
    offset?: number;
    userId?: number;
}
export declare class ContentDefinitionsGetContentDefinitionsRequest extends SpeakeasyBase {
    queryParams: ContentDefinitionsGetContentDefinitionsQueryParams;
}
export declare class ContentDefinitionsGetContentDefinitionsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition;
    contentType: string;
    statusCode: number;
}

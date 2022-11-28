import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentSubmissionTypesGetContentSubmissionTypesQueryParams extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class ContentSubmissionTypesGetContentSubmissionTypesRequest extends SpeakeasyBase {
    queryParams: ContentSubmissionTypesGetContentSubmissionTypesQueryParams;
}
export declare class ContentSubmissionTypesGetContentSubmissionTypesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentSubmissionSharedBusinessEntitiesContentSubmissionTypes?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType[];
    contentType: string;
    statusCode: number;
}

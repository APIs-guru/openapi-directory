import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReleaseGetContentReleaseVersionQueryParams extends SpeakeasyBase {
    contentDefinitionId?: number;
    deleted?: boolean;
    limit?: number;
    offset?: number;
    releaseId?: number;
    userId?: number;
    version?: number;
}
export declare class ContentReleaseGetContentReleaseVersionRequest extends SpeakeasyBase {
    queryParams: ContentReleaseGetContentReleaseVersionQueryParams;
}
export declare class ContentReleaseGetContentReleaseVersionResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion;
    contentType: string;
    statusCode: number;
}

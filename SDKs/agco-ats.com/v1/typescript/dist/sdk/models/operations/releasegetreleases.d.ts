import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReleaseGetReleasesQueryParams extends SpeakeasyBase {
    bundleId?: string;
    limit?: number;
    offset?: number;
    visible?: boolean;
}
export declare class ReleaseGetReleasesRequest extends SpeakeasyBase {
    queryParams: ReleaseGetReleasesQueryParams;
}
export declare class ReleaseGetReleasesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseContentSubmissionSharedBusinessEntitiesRelease?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesRelease;
    contentType: string;
    statusCode: number;
}

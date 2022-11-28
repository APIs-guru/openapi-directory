import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReleaseGetReleasePathParams extends SpeakeasyBase {
    releaseId: number;
}
export declare class ReleaseGetReleaseRequest extends SpeakeasyBase {
    pathParams: ReleaseGetReleasePathParams;
}
export declare class ReleaseGetReleaseResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentSubmissionSharedBusinessEntitiesRelease?: shared.ContentSubmissionSharedBusinessEntitiesRelease;
    contentType: string;
    statusCode: number;
}

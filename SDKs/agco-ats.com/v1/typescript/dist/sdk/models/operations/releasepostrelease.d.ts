import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReleasePostReleaseRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    contentSubmissionSharedBusinessEntitiesRelease?: shared.ContentSubmissionSharedBusinessEntitiesRelease;
    contentSubmissionSharedBusinessEntitiesRelease1?: shared.ContentSubmissionSharedBusinessEntitiesRelease;
    contentSubmissionSharedBusinessEntitiesRelease2?: shared.ContentSubmissionSharedBusinessEntitiesRelease;
    textXml: Uint8Array;
}
export declare class ReleasePostReleaseRequest extends SpeakeasyBase {
    request: ReleasePostReleaseRequests;
}
export declare class ReleasePostReleaseResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    releasePostRelease200ApplicationJsonInt32Integer?: number;
    releasePostRelease200TextJsonInt32Integer?: number;
    statusCode: number;
}

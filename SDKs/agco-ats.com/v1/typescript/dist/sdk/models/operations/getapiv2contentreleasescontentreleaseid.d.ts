import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV2ContentReleasesContentReleaseIdPathParams extends SpeakeasyBase {
    contentReleaseId: number;
}
export declare class GetApiV2ContentReleasesContentReleaseIdRequest extends SpeakeasyBase {
    pathParams: GetApiV2ContentReleasesContentReleaseIdPathParams;
}
export declare class GetApiV2ContentReleasesContentReleaseIdResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentSubmissionSharedBusinessEntitiesContentReleaseVersion?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;
    contentType: string;
    statusCode: number;
}

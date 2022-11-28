import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReleasePostContentReleaseRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    contentSubmissionSharedBusinessEntitiesContentReleaseVersion?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;
    contentSubmissionSharedBusinessEntitiesContentReleaseVersion1?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;
    contentSubmissionSharedBusinessEntitiesContentReleaseVersion2?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;
    textXml: Uint8Array;
}
export declare class ContentReleasePostContentReleaseRequest extends SpeakeasyBase {
    request: ContentReleasePostContentReleaseRequests;
}
export declare class ContentReleasePostContentReleaseResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentReleasePostContentRelease200ApplicationJsonInt32Integer?: number;
    contentReleasePostContentRelease200TextJsonInt32Integer?: number;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReleasePutContentDefinitionPathParams extends SpeakeasyBase {
    contentReleaseId: number;
}
export declare class ContentReleasePutContentDefinitionRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    contentSubmissionSharedBusinessEntitiesContentReleaseVersion?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;
    contentSubmissionSharedBusinessEntitiesContentReleaseVersion1?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;
    contentSubmissionSharedBusinessEntitiesContentReleaseVersion2?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;
    textXml: Uint8Array;
}
export declare class ContentReleasePutContentDefinitionRequest extends SpeakeasyBase {
    pathParams: ContentReleasePutContentDefinitionPathParams;
    request: ContentReleasePutContentDefinitionRequests;
}
export declare class ContentReleasePutContentDefinitionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

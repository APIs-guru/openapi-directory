import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReleasePutContentDefinitionPathParams extends SpeakeasyBase {
    releaseId: number;
}
export declare class ReleasePutContentDefinitionRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    contentSubmissionSharedBusinessEntitiesRelease?: shared.ContentSubmissionSharedBusinessEntitiesRelease;
    contentSubmissionSharedBusinessEntitiesRelease1?: shared.ContentSubmissionSharedBusinessEntitiesRelease;
    contentSubmissionSharedBusinessEntitiesRelease2?: shared.ContentSubmissionSharedBusinessEntitiesRelease;
    textXml: Uint8Array;
}
export declare class ReleasePutContentDefinitionRequest extends SpeakeasyBase {
    pathParams: ReleasePutContentDefinitionPathParams;
    request: ReleasePutContentDefinitionRequests;
}
export declare class ReleasePutContentDefinitionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

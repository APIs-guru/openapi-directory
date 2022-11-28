import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentSubmissionTypesPutContentSubmissionTypePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ContentSubmissionTypesPutContentSubmissionTypeRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    contentSubmissionSharedBusinessEntitiesContentSubmissionType?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;
    contentSubmissionSharedBusinessEntitiesContentSubmissionType1?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;
    contentSubmissionSharedBusinessEntitiesContentSubmissionType2?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;
    textXml: Uint8Array;
}
export declare class ContentSubmissionTypesPutContentSubmissionTypeRequest extends SpeakeasyBase {
    pathParams: ContentSubmissionTypesPutContentSubmissionTypePathParams;
    request: ContentSubmissionTypesPutContentSubmissionTypeRequests;
}
export declare class ContentSubmissionTypesPutContentSubmissionTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

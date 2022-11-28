import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContentSubmissionsDeleteContentSubmissionPathParams extends SpeakeasyBase {
    contentSubmissionId: number;
}
export declare class ContentSubmissionsDeleteContentSubmissionRequest extends SpeakeasyBase {
    pathParams: ContentSubmissionsDeleteContentSubmissionPathParams;
}
export declare class ContentSubmissionsDeleteContentSubmissionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

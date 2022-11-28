import { SpeakeasyBase } from "../../../internal/utils";
export declare class GlobalImagesDeleteFilePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GlobalImagesDeleteFileRequest extends SpeakeasyBase {
    pathParams: GlobalImagesDeleteFilePathParams;
}
export declare class GlobalImagesDeleteFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

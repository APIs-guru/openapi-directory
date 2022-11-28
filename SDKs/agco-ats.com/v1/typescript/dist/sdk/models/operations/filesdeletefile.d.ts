import { SpeakeasyBase } from "../../../internal/utils";
export declare class FilesDeleteFilePathParams extends SpeakeasyBase {
    id: string;
}
export declare class FilesDeleteFileRequest extends SpeakeasyBase {
    pathParams: FilesDeleteFilePathParams;
}
export declare class FilesDeleteFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

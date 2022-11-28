import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FilesPutFileContentsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class FilesPutFileContentsRequest extends SpeakeasyBase {
    pathParams: FilesPutFileContentsPathParams;
}
export declare class FilesPutFileContentsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}

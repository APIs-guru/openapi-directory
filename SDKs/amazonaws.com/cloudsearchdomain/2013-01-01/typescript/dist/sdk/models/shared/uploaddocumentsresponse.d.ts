import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentServiceWarning } from "./documentservicewarning";
/**
 * Contains the response to an <code>UploadDocuments</code> request.
**/
export declare class UploadDocumentsResponse extends SpeakeasyBase {
    adds?: number;
    deletes?: number;
    status?: string;
    warnings?: DocumentServiceWarning[];
}

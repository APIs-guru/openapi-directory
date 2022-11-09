import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UploadListElement } from "./uploadlistelement";
/**
 * Contains the Amazon S3 Glacier response to your request.
**/
export declare class ListMultipartUploadsOutput extends SpeakeasyBase {
    marker?: string;
    uploadsList?: UploadListElement[];
}

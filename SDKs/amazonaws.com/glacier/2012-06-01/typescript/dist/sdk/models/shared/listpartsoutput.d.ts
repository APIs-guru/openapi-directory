import { SpeakeasyBase } from "../../../internal/utils";
import { PartListElement } from "./partlistelement";
/**
 * Contains the Amazon S3 Glacier response to your request.
**/
export declare class ListPartsOutput extends SpeakeasyBase {
    archiveDescription?: string;
    creationDate?: string;
    marker?: string;
    multipartUploadId?: string;
    partSizeInBytes?: number;
    parts?: PartListElement[];
    vaultArn?: string;
}

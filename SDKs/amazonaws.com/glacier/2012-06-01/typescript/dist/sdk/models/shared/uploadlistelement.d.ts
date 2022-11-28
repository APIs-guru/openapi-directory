import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of in-progress multipart uploads for a vault.
**/
export declare class UploadListElement extends SpeakeasyBase {
    archiveDescription?: string;
    creationDate?: string;
    multipartUploadId?: string;
    partSizeInBytes?: number;
    vaultArn?: string;
}

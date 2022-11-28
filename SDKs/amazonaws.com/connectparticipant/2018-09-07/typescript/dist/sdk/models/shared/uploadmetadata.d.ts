import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Fields to be used while uploading the attachment.
**/
export declare class UploadMetadata extends SpeakeasyBase {
    headersToInclude?: Map<string, string>;
    url?: string;
    urlExpiry?: string;
}

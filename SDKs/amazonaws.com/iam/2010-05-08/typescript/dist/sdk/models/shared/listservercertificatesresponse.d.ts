import { SpeakeasyBase } from "../../../internal/utils";
import { ServerCertificateMetadata } from "./servercertificatemetadata";
/**
 * Contains the response to a successful <a>ListServerCertificates</a> request.
**/
export declare class ListServerCertificatesResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    serverCertificateMetadataList: ServerCertificateMetadata[];
}

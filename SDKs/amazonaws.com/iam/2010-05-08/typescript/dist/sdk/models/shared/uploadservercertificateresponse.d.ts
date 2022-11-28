import { SpeakeasyBase } from "../../../internal/utils";
import { ServerCertificateMetadata } from "./servercertificatemetadata";
import { Tag } from "./tag";
/**
 * Contains the response to a successful <a>UploadServerCertificate</a> request.
**/
export declare class UploadServerCertificateResponse extends SpeakeasyBase {
    serverCertificateMetadata?: ServerCertificateMetadata;
    tags?: Tag[];
}

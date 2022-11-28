import { SpeakeasyBase } from "../../../internal/utils";
import { SigningCertificate } from "./signingcertificate";
/**
 * Contains the response to a successful <a>UploadSigningCertificate</a> request.
**/
export declare class UploadSigningCertificateResponse extends SpeakeasyBase {
    certificate: SigningCertificate;
}

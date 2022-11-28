import { SpeakeasyBase } from "../../../internal/utils";
import { SigningCertificate } from "./signingcertificate";
/**
 * Contains the response to a successful <a>ListSigningCertificates</a> request.
**/
export declare class ListSigningCertificatesResponse extends SpeakeasyBase {
    certificates: SigningCertificate[];
    isTruncated?: boolean;
    marker?: string;
}

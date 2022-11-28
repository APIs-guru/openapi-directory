import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains information about a server certificate without its certificate body, certificate chain, and private key.</p> <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a> operations. </p>
**/
export declare class ServerCertificateMetadata extends SpeakeasyBase {
    arn: string;
    expiration?: Date;
    path: string;
    serverCertificateId: string;
    serverCertificateName: string;
    uploadDate?: Date;
}

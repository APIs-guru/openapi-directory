import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServerCertificateMetadata
/** 
 * <p>Contains information about a server certificate without its certificate body, certificate chain, and private key.</p> <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a> operations. </p>
**/
export class ServerCertificateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn: string;

  @SpeakeasyMetadata()
  expiration?: Date;

  @SpeakeasyMetadata()
  path: string;

  @SpeakeasyMetadata()
  serverCertificateId: string;

  @SpeakeasyMetadata()
  serverCertificateName: string;

  @SpeakeasyMetadata()
  uploadDate?: Date;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Certificate
/** 
 * The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance.
**/
export class Certificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=CertificateCreationDate" })
  certificateCreationDate?: Date;

  @Metadata({ data: "json, name=CertificateIdentifier" })
  certificateIdentifier?: string;

  @Metadata({ data: "json, name=CertificateOwner" })
  certificateOwner?: string;

  @Metadata({ data: "json, name=CertificatePem" })
  certificatePem?: string;

  @Metadata({ data: "json, name=CertificateWallet" })
  certificateWallet?: string;

  @Metadata({ data: "json, name=KeyLength" })
  keyLength?: number;

  @Metadata({ data: "json, name=SigningAlgorithm" })
  signingAlgorithm?: string;

  @Metadata({ data: "json, name=ValidFromDate" })
  validFromDate?: Date;

  @Metadata({ data: "json, name=ValidToDate" })
  validToDate?: Date;
}

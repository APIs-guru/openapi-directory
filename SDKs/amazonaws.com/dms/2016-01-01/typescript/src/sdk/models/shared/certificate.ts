import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Certificate
/** 
 * The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance.
**/
export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateCreationDate" })
  certificateCreationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=CertificateIdentifier" })
  certificateIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateOwner" })
  certificateOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificatePem" })
  certificatePem?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateWallet" })
  certificateWallet?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyLength" })
  keyLength?: number;

  @SpeakeasyMetadata({ data: "json, name=SigningAlgorithm" })
  signingAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidFromDate" })
  validFromDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ValidToDate" })
  validToDate?: Date;
}

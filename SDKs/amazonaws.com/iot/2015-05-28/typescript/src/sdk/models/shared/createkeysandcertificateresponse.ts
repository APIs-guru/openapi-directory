import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPair } from "./keypair";



// CreateKeysAndCertificateResponse
/** 
 * The output of the CreateKeysAndCertificate operation.
**/
export class CreateKeysAndCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=certificatePem" })
  certificatePem?: string;

  @SpeakeasyMetadata({ data: "json, name=keyPair" })
  keyPair?: KeyPair;
}

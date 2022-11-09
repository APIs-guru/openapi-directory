import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyPair } from "./keypair";


// CreateKeysAndCertificateResponse
/** 
 * The output of the CreateKeysAndCertificate operation.
**/
export class CreateKeysAndCertificateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @Metadata({ data: "json, name=certificatePem" })
  certificatePem?: string;

  @Metadata({ data: "json, name=keyPair" })
  keyPair?: KeyPair;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransferCertificateResponse
/** 
 * The output from the TransferCertificate operation.
**/
export class TransferCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transferredCertificateArn" })
  transferredCertificateArn?: string;
}

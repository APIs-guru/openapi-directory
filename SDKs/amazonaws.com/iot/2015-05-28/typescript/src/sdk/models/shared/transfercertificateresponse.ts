import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransferCertificateResponse
/** 
 * The output from the TransferCertificate operation.
**/
export class TransferCertificateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=transferredCertificateArn" })
  transferredCertificateArn?: string;
}

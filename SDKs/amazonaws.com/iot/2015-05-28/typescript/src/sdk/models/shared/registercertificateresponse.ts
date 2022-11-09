import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegisterCertificateResponse
/** 
 * The output from the RegisterCertificate operation.
**/
export class RegisterCertificateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=certificateId" })
  certificateId?: string;
}

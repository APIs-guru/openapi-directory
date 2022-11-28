import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterCertificateResponse
/** 
 * The output from the RegisterCertificate operation.
**/
export class RegisterCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateId" })
  certificateId?: string;
}

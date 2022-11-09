import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegisterCaCertificateResponse
/** 
 * The output from the RegisterCACertificateResponse operation.
**/
export class RegisterCaCertificateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=certificateId" })
  certificateId?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterCaCertificateResponse
/** 
 * The output from the RegisterCACertificateResponse operation.
**/
export class RegisterCaCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateId" })
  certificateId?: string;
}

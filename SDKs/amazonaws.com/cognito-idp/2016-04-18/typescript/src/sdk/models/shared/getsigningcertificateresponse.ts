import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetSigningCertificateResponse
/** 
 * Response from Cognito for a signing certificate request.
**/
export class GetSigningCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate?: string;
}

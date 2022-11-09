import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetSigningCertificateResponse
/** 
 * Response from Cognito for a signing certificate request.
**/
export class GetSigningCertificateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificate" })
  certificate?: string;
}

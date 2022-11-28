import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetSigningCertificateRequest
/** 
 * Request to get a signing certificate from Cognito.
**/
export class GetSigningCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}

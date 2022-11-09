import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetSigningCertificateRequest
/** 
 * Request to get a signing certificate from Cognito.
**/
export class GetSigningCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}

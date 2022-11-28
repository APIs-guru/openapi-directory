import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FederatedAuthentication
/** 
 * Describes the IAM SAML identity providers used for federated authentication.
**/
export class FederatedAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata()
  samlProviderArn?: string;

  @SpeakeasyMetadata()
  selfServiceSamlProviderArn?: string;
}

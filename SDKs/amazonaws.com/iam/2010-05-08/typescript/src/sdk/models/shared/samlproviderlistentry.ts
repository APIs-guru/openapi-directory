import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SamlProviderListEntry
/** 
 * Contains the list of SAML providers for this account.
**/
export class SamlProviderListEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  createDate?: Date;

  @SpeakeasyMetadata()
  validUntil?: Date;
}

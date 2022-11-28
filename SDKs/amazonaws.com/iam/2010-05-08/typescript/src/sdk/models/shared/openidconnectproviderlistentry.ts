import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OpenIdConnectProviderListEntry
/** 
 * Contains the Amazon Resource Name (ARN) for an IAM OpenID Connect provider.
**/
export class OpenIdConnectProviderListEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;
}

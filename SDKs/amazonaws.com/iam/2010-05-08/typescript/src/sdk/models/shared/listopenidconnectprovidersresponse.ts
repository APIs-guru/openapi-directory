import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpenIdConnectProviderListEntry } from "./openidconnectproviderlistentry";



// ListOpenIdConnectProvidersResponse
/** 
 * Contains the response to a successful <a>ListOpenIDConnectProviders</a> request. 
**/
export class ListOpenIdConnectProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: OpenIdConnectProviderListEntry })
  openIdConnectProviderList?: OpenIdConnectProviderListEntry[];
}

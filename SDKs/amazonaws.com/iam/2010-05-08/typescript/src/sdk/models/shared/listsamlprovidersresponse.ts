import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SamlProviderListEntry } from "./samlproviderlistentry";



// ListSamlProvidersResponse
/** 
 * Contains the response to a successful <a>ListSAMLProviders</a> request. 
**/
export class ListSamlProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SamlProviderListEntry })
  samlProviderList?: SamlProviderListEntry[];
}

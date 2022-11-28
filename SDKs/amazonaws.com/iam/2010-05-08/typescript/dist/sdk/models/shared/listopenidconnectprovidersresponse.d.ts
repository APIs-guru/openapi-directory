import { SpeakeasyBase } from "../../../internal/utils";
import { OpenIdConnectProviderListEntry } from "./openidconnectproviderlistentry";
/**
 * Contains the response to a successful <a>ListOpenIDConnectProviders</a> request.
**/
export declare class ListOpenIdConnectProvidersResponse extends SpeakeasyBase {
    openIdConnectProviderList?: OpenIdConnectProviderListEntry[];
}

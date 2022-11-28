import { SpeakeasyBase } from "../../../internal/utils";
import { SamlProviderListEntry } from "./samlproviderlistentry";
/**
 * Contains the response to a successful <a>ListSAMLProviders</a> request.
**/
export declare class ListSamlProvidersResponse extends SpeakeasyBase {
    samlProviderList?: SamlProviderListEntry[];
}

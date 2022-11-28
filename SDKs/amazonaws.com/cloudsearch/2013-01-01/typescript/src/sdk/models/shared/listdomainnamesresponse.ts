import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListDomainNamesResponse
/** 
 * The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.
**/
export class ListDomainNamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  domainNames?: Map<string, string>;
}

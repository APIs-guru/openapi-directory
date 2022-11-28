import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.
**/
export declare class ListDomainNamesResponse extends SpeakeasyBase {
    domainNames?: Map<string, string>;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object in a list that represents a domain.
**/
export declare class ListDomainItem extends SpeakeasyBase {
    createdAt: Date;
    domainName: string;
    lastUpdatedAt: Date;
    tags?: Map<string, string>;
}

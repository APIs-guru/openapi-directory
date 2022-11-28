import { SpeakeasyBase } from "../../../internal/utils";
import { ListDomainItem } from "./listdomainitem";
export declare class ListDomainsResponse extends SpeakeasyBase {
    items?: ListDomainItem[];
    nextToken?: string;
}

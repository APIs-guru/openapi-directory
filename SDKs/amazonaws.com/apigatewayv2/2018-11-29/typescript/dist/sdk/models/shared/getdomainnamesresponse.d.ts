import { SpeakeasyBase } from "../../../internal/utils";
import { DomainName } from "./domainname";
export declare class GetDomainNamesResponse extends SpeakeasyBase {
    items?: DomainName[];
    nextToken?: string;
}

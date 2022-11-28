import { SpeakeasyBase } from "../../../internal/utils";
import { PartnerEventSourceAccount } from "./partnereventsourceaccount";
export declare class ListPartnerEventSourceAccountsResponse extends SpeakeasyBase {
    nextToken?: string;
    partnerEventSourceAccounts?: PartnerEventSourceAccount[];
}

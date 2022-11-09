import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PartnerEventSourceAccount } from "./partnereventsourceaccount";
export declare class ListPartnerEventSourceAccountsResponse extends SpeakeasyBase {
    nextToken?: string;
    partnerEventSourceAccounts?: PartnerEventSourceAccount[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartnerEventSourceAccount } from "./partnereventsourceaccount";



export class ListPartnerEventSourceAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PartnerEventSourceAccounts", elemType: PartnerEventSourceAccount })
  partnerEventSourceAccounts?: PartnerEventSourceAccount[];
}

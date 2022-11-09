import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PartnerEventSourceAccount } from "./partnereventsourceaccount";


export class ListPartnerEventSourceAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PartnerEventSourceAccounts", elemType: shared.PartnerEventSourceAccount })
  partnerEventSourceAccounts?: PartnerEventSourceAccount[];
}

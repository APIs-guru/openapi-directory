import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListMemberAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MemberAccounts" })
  memberAccounts?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

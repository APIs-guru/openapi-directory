import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListMemberAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MemberAccounts" })
  memberAccounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

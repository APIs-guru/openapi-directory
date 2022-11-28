import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberDetail } from "./memberdetail";
import { UnprocessedAccount } from "./unprocessedaccount";



export class GetMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MemberDetails", elemType: MemberDetail })
  memberDetails?: MemberDetail[];

  @SpeakeasyMetadata({ data: "json, name=UnprocessedAccounts", elemType: UnprocessedAccount })
  unprocessedAccounts?: UnprocessedAccount[];
}

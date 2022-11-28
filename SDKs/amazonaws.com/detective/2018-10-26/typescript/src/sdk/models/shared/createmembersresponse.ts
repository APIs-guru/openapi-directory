import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberDetail } from "./memberdetail";
import { UnprocessedAccount } from "./unprocessedaccount";



export class CreateMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Members", elemType: MemberDetail })
  members?: MemberDetail[];

  @SpeakeasyMetadata({ data: "json, name=UnprocessedAccounts", elemType: UnprocessedAccount })
  unprocessedAccounts?: UnprocessedAccount[];
}

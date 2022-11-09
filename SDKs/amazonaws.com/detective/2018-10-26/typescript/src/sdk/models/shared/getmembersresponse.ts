import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MemberDetail } from "./memberdetail";
import { UnprocessedAccount } from "./unprocessedaccount";


export class GetMembersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MemberDetails", elemType: shared.MemberDetail })
  memberDetails?: MemberDetail[];

  @Metadata({ data: "json, name=UnprocessedAccounts", elemType: shared.UnprocessedAccount })
  unprocessedAccounts?: UnprocessedAccount[];
}

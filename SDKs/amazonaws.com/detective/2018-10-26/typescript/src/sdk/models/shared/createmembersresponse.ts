import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MemberDetail } from "./memberdetail";
import { UnprocessedAccount } from "./unprocessedaccount";


export class CreateMembersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Members", elemType: shared.MemberDetail })
  members?: MemberDetail[];

  @Metadata({ data: "json, name=UnprocessedAccounts", elemType: shared.UnprocessedAccount })
  unprocessedAccounts?: UnprocessedAccount[];
}

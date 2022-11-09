import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UnprocessedAccount } from "./unprocessedaccount";


export class DeleteMembersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountIds" })
  accountIds?: string[];

  @Metadata({ data: "json, name=UnprocessedAccounts", elemType: shared.UnprocessedAccount })
  unprocessedAccounts?: UnprocessedAccount[];
}

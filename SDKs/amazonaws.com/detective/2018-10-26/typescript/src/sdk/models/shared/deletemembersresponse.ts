import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnprocessedAccount } from "./unprocessedaccount";



export class DeleteMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=UnprocessedAccounts", elemType: UnprocessedAccount })
  unprocessedAccounts?: UnprocessedAccount[];
}

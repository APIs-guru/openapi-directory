import { SpeakeasyBase } from "../../../internal/utils";
import { UnprocessedAccount } from "./unprocessedaccount";
export declare class DeleteMembersResponse extends SpeakeasyBase {
    accountIds?: string[];
    unprocessedAccounts?: UnprocessedAccount[];
}

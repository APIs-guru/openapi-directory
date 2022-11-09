import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberDetail } from "./memberdetail";
import { UnprocessedAccount } from "./unprocessedaccount";
export declare class CreateMembersResponse extends SpeakeasyBase {
    members?: MemberDetail[];
    unprocessedAccounts?: UnprocessedAccount[];
}

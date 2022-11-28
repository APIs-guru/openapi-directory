import { SpeakeasyBase } from "../../../internal/utils";
import { MemberDetail } from "./memberdetail";
export declare class ListInvitationsResponse extends SpeakeasyBase {
    invitations?: MemberDetail[];
    nextToken?: string;
}

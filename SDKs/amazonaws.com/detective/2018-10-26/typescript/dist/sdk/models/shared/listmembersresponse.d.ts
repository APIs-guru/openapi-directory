import { SpeakeasyBase } from "../../../internal/utils";
import { MemberDetail } from "./memberdetail";
export declare class ListMembersResponse extends SpeakeasyBase {
    memberDetails?: MemberDetail[];
    nextToken?: string;
}

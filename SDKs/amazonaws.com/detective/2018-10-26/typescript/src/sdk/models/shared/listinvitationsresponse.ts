import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MemberDetail } from "./memberdetail";


export class ListInvitationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Invitations", elemType: shared.MemberDetail })
  invitations?: MemberDetail[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

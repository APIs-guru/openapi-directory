import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberDetail } from "./memberdetail";



export class ListInvitationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Invitations", elemType: MemberDetail })
  invitations?: MemberDetail[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

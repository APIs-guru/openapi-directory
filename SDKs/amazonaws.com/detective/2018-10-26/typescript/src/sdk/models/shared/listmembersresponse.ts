import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberDetail } from "./memberdetail";



export class ListMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MemberDetails", elemType: MemberDetail })
  memberDetails?: MemberDetail[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

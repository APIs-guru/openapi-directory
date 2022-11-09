import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MemberDetail } from "./memberdetail";


export class ListMembersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MemberDetails", elemType: shared.MemberDetail })
  memberDetails?: MemberDetail[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

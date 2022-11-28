import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserType } from "./usertype";



export class ListUsersInGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Users", elemType: UserType })
  users?: UserType[];
}

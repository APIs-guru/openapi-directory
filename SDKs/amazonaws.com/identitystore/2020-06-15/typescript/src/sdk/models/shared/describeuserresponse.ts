import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserId" })
  userId: string;

  @Metadata({ data: "json, name=UserName" })
  userName: string;
}

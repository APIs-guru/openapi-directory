import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;
}

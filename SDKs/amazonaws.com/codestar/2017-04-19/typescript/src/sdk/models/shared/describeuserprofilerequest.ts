import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeUserProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeResourceServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}

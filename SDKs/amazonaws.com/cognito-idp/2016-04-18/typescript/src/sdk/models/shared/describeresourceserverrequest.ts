import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeResourceServerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identifier" })
  identifier: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}

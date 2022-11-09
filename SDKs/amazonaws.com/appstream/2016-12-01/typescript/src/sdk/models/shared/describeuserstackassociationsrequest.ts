import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";


export class DescribeUserStackAssociationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthenticationType" })
  authenticationType?: AuthenticationTypeEnum;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StackName" })
  stackName?: string;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}

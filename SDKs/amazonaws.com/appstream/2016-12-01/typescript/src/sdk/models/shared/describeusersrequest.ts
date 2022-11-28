import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";



export class DescribeUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthenticationType" })
  authenticationType: AuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

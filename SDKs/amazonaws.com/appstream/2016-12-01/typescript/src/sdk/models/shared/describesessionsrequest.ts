import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";


export class DescribeSessionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthenticationType" })
  authenticationType?: AuthenticationTypeEnum;

  @Metadata({ data: "json, name=FleetName" })
  fleetName: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StackName" })
  stackName: string;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;
}

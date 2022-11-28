import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";



export class DescribeSessionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthenticationType" })
  authenticationType?: AuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FleetName" })
  fleetName: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StackName" })
  stackName: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;
}

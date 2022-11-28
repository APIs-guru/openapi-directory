import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { SessionConnectionStateEnum } from "./sessionconnectionstateenum";
import { NetworkAccessConfiguration } from "./networkaccessconfiguration";
import { SessionStateEnum } from "./sessionstateenum";



// Session
/** 
 * Describes a streaming session.
**/
export class Session extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthenticationType" })
  authenticationType?: AuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ConnectionState" })
  connectionState?: SessionConnectionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=FleetName" })
  fleetName: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=MaxExpirationTime" })
  maxExpirationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NetworkAccessConfiguration" })
  networkAccessConfiguration?: NetworkAccessConfiguration;

  @SpeakeasyMetadata({ data: "json, name=StackName" })
  stackName: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state: SessionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId: string;
}

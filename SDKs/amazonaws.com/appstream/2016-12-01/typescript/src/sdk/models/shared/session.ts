import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { SessionConnectionStateEnum } from "./sessionconnectionstateenum";
import { NetworkAccessConfiguration } from "./networkaccessconfiguration";
import { SessionStateEnum } from "./sessionstateenum";


// Session
/** 
 * Describes a streaming session.
**/
export class Session extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthenticationType" })
  authenticationType?: AuthenticationTypeEnum;

  @Metadata({ data: "json, name=ConnectionState" })
  connectionState?: SessionConnectionStateEnum;

  @Metadata({ data: "json, name=FleetName" })
  fleetName: string;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=MaxExpirationTime" })
  maxExpirationTime?: Date;

  @Metadata({ data: "json, name=NetworkAccessConfiguration" })
  networkAccessConfiguration?: NetworkAccessConfiguration;

  @Metadata({ data: "json, name=StackName" })
  stackName: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=State" })
  state: SessionStateEnum;

  @Metadata({ data: "json, name=UserId" })
  userId: string;
}

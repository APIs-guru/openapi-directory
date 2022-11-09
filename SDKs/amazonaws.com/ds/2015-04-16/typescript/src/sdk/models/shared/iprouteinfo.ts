import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IpRouteStatusMsgEnum } from "./iproutestatusmsgenum";


// IpRouteInfo
/** 
 * Information about one or more IP address blocks.
**/
export class IpRouteInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddedDateTime" })
  addedDateTime?: Date;

  @Metadata({ data: "json, name=CidrIp" })
  cidrIp?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=IpRouteStatusMsg" })
  ipRouteStatusMsg?: IpRouteStatusMsgEnum;

  @Metadata({ data: "json, name=IpRouteStatusReason" })
  ipRouteStatusReason?: string;
}

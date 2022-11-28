import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpRouteStatusMsgEnum } from "./iproutestatusmsgenum";



// IpRouteInfo
/** 
 * Information about one or more IP address blocks.
**/
export class IpRouteInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddedDateTime" })
  addedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CidrIp" })
  cidrIp?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=IpRouteStatusMsg" })
  ipRouteStatusMsg?: IpRouteStatusMsgEnum;

  @SpeakeasyMetadata({ data: "json, name=IpRouteStatusReason" })
  ipRouteStatusReason?: string;
}

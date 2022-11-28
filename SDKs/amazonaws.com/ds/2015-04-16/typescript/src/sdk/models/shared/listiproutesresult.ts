import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpRouteInfo } from "./iprouteinfo";



export class ListIpRoutesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IpRoutesInfo", elemType: IpRouteInfo })
  ipRoutesInfo?: IpRouteInfo[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpRouteInfo } from "./iprouteinfo";


export class ListIpRoutesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=IpRoutesInfo", elemType: shared.IpRouteInfo })
  ipRoutesInfo?: IpRouteInfo[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

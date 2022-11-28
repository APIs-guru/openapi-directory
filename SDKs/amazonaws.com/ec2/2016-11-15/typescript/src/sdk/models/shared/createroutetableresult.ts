import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteTable } from "./routetable";



export class CreateRouteTableResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  routeTable?: RouteTable;
}

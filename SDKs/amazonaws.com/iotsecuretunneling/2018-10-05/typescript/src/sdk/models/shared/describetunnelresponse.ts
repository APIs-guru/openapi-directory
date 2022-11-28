import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tunnel } from "./tunnel";



export class DescribeTunnelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tunnel" })
  tunnel?: Tunnel;
}

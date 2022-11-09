import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Tunnel } from "./tunnel";


export class DescribeTunnelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=tunnel" })
  tunnel?: Tunnel;
}

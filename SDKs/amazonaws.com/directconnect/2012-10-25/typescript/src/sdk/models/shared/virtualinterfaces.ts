import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualInterface } from "./virtualinterface";



export class VirtualInterfaces extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualInterfaces", elemType: VirtualInterface })
  virtualInterfaces?: VirtualInterface[];
}

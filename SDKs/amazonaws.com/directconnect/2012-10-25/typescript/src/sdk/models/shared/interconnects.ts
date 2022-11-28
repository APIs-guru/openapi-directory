import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Interconnect } from "./interconnect";



export class Interconnects extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interconnects", elemType: Interconnect })
  interconnects?: Interconnect[];
}

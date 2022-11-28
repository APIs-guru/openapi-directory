import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingAccelerator } from "./customroutingaccelerator";



export class UpdateCustomRoutingAcceleratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accelerator" })
  accelerator?: CustomRoutingAccelerator;
}

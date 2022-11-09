import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomRoutingAccelerator } from "./customroutingaccelerator";


export class CreateCustomRoutingAcceleratorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accelerator" })
  accelerator?: CustomRoutingAccelerator;
}

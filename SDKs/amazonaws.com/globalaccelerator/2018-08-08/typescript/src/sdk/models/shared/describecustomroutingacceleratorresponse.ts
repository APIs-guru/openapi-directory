import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomRoutingAccelerator } from "./customroutingaccelerator";


export class DescribeCustomRoutingAcceleratorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accelerator" })
  accelerator?: CustomRoutingAccelerator;
}

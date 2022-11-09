import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomRoutingAcceleratorAttributes } from "./customroutingacceleratorattributes";


export class UpdateCustomRoutingAcceleratorAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorAttributes" })
  acceleratorAttributes?: CustomRoutingAcceleratorAttributes;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingAcceleratorAttributes } from "./customroutingacceleratorattributes";



export class UpdateCustomRoutingAcceleratorAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorAttributes" })
  acceleratorAttributes?: CustomRoutingAcceleratorAttributes;
}

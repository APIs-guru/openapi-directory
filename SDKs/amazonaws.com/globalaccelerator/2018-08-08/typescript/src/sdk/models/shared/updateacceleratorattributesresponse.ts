import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorAttributes } from "./acceleratorattributes";



export class UpdateAcceleratorAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorAttributes" })
  acceleratorAttributes?: AcceleratorAttributes;
}

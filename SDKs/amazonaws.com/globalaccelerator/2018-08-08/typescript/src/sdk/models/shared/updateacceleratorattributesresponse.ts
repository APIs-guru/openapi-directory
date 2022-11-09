import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AcceleratorAttributes } from "./acceleratorattributes";


export class UpdateAcceleratorAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorAttributes" })
  acceleratorAttributes?: AcceleratorAttributes;
}

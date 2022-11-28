import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Accelerator } from "./accelerator";



export class CreateAcceleratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accelerator" })
  accelerator?: Accelerator;
}

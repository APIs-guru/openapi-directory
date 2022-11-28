import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Accelerator } from "./accelerator";



export class UpdateAcceleratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accelerator" })
  accelerator?: Accelerator;
}

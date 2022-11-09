import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Accelerator } from "./accelerator";


export class CreateAcceleratorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accelerator" })
  accelerator?: Accelerator;
}

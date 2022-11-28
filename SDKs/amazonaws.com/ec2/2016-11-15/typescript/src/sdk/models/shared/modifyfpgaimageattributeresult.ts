import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FpgaImageAttribute } from "./fpgaimageattribute";



export class ModifyFpgaImageAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fpgaImageAttribute?: FpgaImageAttribute;
}

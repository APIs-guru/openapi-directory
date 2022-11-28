import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FpgaImageAttribute } from "./fpgaimageattribute";



export class DescribeFpgaImageAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fpgaImageAttribute?: FpgaImageAttribute;
}

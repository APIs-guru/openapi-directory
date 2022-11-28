import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FpgaImageStateCodeEnum } from "./fpgaimagestatecodeenum";



// FpgaImageState
/** 
 * Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).
**/
export class FpgaImageState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: FpgaImageStateCodeEnum;

  @SpeakeasyMetadata()
  message?: string;
}

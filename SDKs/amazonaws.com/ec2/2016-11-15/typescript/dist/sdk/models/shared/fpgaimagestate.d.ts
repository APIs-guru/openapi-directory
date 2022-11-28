import { SpeakeasyBase } from "../../../internal/utils";
import { FpgaImageStateCodeEnum } from "./fpgaimagestatecodeenum";
/**
 * Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).
**/
export declare class FpgaImageState extends SpeakeasyBase {
    code?: FpgaImageStateCodeEnum;
    message?: string;
}

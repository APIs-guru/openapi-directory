import { SpeakeasyBase } from "../../../internal/utils";
import { LoadPermission } from "./loadpermission";
import { ProductCode } from "./productcode";
/**
 * Describes an Amazon FPGA image (AFI) attribute.
**/
export declare class FpgaImageAttribute extends SpeakeasyBase {
    description?: string;
    fpgaImageId?: string;
    loadPermissions?: LoadPermission[];
    name?: string;
    productCodes?: ProductCode[];
}

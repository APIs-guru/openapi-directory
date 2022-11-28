import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadPermission } from "./loadpermission";
import { ProductCode } from "./productcode";



// FpgaImageAttribute
/** 
 * Describes an Amazon FPGA image (AFI) attribute.
**/
export class FpgaImageAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  fpgaImageId?: string;

  @SpeakeasyMetadata({ elemType: LoadPermission })
  loadPermissions?: LoadPermission[];

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata({ elemType: ProductCode })
  productCodes?: ProductCode[];
}

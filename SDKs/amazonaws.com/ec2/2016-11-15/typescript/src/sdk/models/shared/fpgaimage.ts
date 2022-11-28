import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PciId } from "./pciid";
import { ProductCode } from "./productcode";
import { FpgaImageState } from "./fpgaimagestate";
import { Tag } from "./tag";



// FpgaImage
/** 
 * Describes an Amazon FPGA image (AFI).
**/
export class FpgaImage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createTime?: Date;

  @SpeakeasyMetadata()
  dataRetentionSupport?: boolean;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  fpgaImageGlobalId?: string;

  @SpeakeasyMetadata()
  fpgaImageId?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  ownerAlias?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  pciId?: PciId;

  @SpeakeasyMetadata({ elemType: ProductCode })
  productCodes?: ProductCode[];

  @SpeakeasyMetadata()
  public?: boolean;

  @SpeakeasyMetadata()
  shellVersion?: string;

  @SpeakeasyMetadata()
  state?: FpgaImageState;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  updateTime?: Date;
}

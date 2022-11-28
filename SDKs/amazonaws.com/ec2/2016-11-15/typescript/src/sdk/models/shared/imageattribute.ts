import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { AttributeValue } from "./attributevalue";
import { LaunchPermission } from "./launchpermission";
import { ProductCode } from "./productcode";



// ImageAttribute
/** 
 * Describes an image attribute.
**/
export class ImageAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: BlockDeviceMapping })
  blockDeviceMappings?: BlockDeviceMapping[];

  @SpeakeasyMetadata()
  bootMode?: AttributeValue;

  @SpeakeasyMetadata()
  description?: AttributeValue;

  @SpeakeasyMetadata()
  imageId?: string;

  @SpeakeasyMetadata()
  kernelId?: AttributeValue;

  @SpeakeasyMetadata({ elemType: LaunchPermission })
  launchPermissions?: LaunchPermission[];

  @SpeakeasyMetadata({ elemType: ProductCode })
  productCodes?: ProductCode[];

  @SpeakeasyMetadata()
  ramdiskId?: AttributeValue;

  @SpeakeasyMetadata()
  sriovNetSupport?: AttributeValue;
}

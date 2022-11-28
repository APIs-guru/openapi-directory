import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureValuesEnum } from "./architecturevaluesenum";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { BootModeValuesEnum } from "./bootmodevaluesenum";
import { HypervisorTypeEnum } from "./hypervisortypeenum";
import { ImageTypeValuesEnum } from "./imagetypevaluesenum";
import { PlatformValuesEnum } from "./platformvaluesenum";
import { ProductCode } from "./productcode";
import { DeviceTypeEnum } from "./devicetypeenum";
import { ImageStateEnum } from "./imagestateenum";
import { StateReason } from "./statereason";
import { Tag } from "./tag";
import { VirtualizationTypeEnum } from "./virtualizationtypeenum";



// Image
/** 
 * Describes an image.
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata()
  architecture?: ArchitectureValuesEnum;

  @SpeakeasyMetadata({ elemType: BlockDeviceMapping })
  blockDeviceMappings?: BlockDeviceMapping[];

  @SpeakeasyMetadata()
  bootMode?: BootModeValuesEnum;

  @SpeakeasyMetadata()
  creationDate?: string;

  @SpeakeasyMetadata()
  deprecationTime?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  enaSupport?: boolean;

  @SpeakeasyMetadata()
  hypervisor?: HypervisorTypeEnum;

  @SpeakeasyMetadata()
  imageId?: string;

  @SpeakeasyMetadata()
  imageLocation?: string;

  @SpeakeasyMetadata()
  imageOwnerAlias?: string;

  @SpeakeasyMetadata()
  imageType?: ImageTypeValuesEnum;

  @SpeakeasyMetadata()
  kernelId?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  platform?: PlatformValuesEnum;

  @SpeakeasyMetadata()
  platformDetails?: string;

  @SpeakeasyMetadata({ elemType: ProductCode })
  productCodes?: ProductCode[];

  @SpeakeasyMetadata()
  public?: boolean;

  @SpeakeasyMetadata()
  ramdiskId?: string;

  @SpeakeasyMetadata()
  rootDeviceName?: string;

  @SpeakeasyMetadata()
  rootDeviceType?: DeviceTypeEnum;

  @SpeakeasyMetadata()
  sriovNetSupport?: string;

  @SpeakeasyMetadata()
  state?: ImageStateEnum;

  @SpeakeasyMetadata()
  stateReason?: StateReason;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  usageOperation?: string;

  @SpeakeasyMetadata()
  virtualizationType?: VirtualizationTypeEnum;
}

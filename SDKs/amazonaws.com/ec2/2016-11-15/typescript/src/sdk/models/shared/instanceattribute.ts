import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";
import { AttributeBooleanValue } from "./attributebooleanvalue";
import { EnclaveOptions } from "./enclaveoptions";
import { GroupIdentifier } from "./groupidentifier";
import { AttributeValue } from "./attributevalue";
import { ProductCode } from "./productcode";



// InstanceAttribute
/** 
 * Describes an instance attribute.
**/
export class InstanceAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceBlockDeviceMapping })
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  @SpeakeasyMetadata()
  disableApiTermination?: AttributeBooleanValue;

  @SpeakeasyMetadata()
  ebsOptimized?: AttributeBooleanValue;

  @SpeakeasyMetadata()
  enaSupport?: AttributeBooleanValue;

  @SpeakeasyMetadata()
  enclaveOptions?: EnclaveOptions;

  @SpeakeasyMetadata({ elemType: GroupIdentifier })
  groups?: GroupIdentifier[];

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  instanceInitiatedShutdownBehavior?: AttributeValue;

  @SpeakeasyMetadata()
  instanceType?: AttributeValue;

  @SpeakeasyMetadata()
  kernelId?: AttributeValue;

  @SpeakeasyMetadata({ elemType: ProductCode })
  productCodes?: ProductCode[];

  @SpeakeasyMetadata()
  ramdiskId?: AttributeValue;

  @SpeakeasyMetadata()
  rootDeviceName?: AttributeValue;

  @SpeakeasyMetadata()
  sourceDestCheck?: AttributeBooleanValue;

  @SpeakeasyMetadata()
  sriovNetSupport?: AttributeValue;

  @SpeakeasyMetadata()
  userData?: AttributeValue;
}

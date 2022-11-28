import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";
import { AttributeBooleanValue } from "./attributebooleanvalue";
import { EnclaveOptions } from "./enclaveoptions";
import { GroupIdentifier } from "./groupidentifier";
import { AttributeValue } from "./attributevalue";
import { ProductCode } from "./productcode";
/**
 * Describes an instance attribute.
**/
export declare class InstanceAttribute extends SpeakeasyBase {
    blockDeviceMappings?: InstanceBlockDeviceMapping[];
    disableApiTermination?: AttributeBooleanValue;
    ebsOptimized?: AttributeBooleanValue;
    enaSupport?: AttributeBooleanValue;
    enclaveOptions?: EnclaveOptions;
    groups?: GroupIdentifier[];
    instanceId?: string;
    instanceInitiatedShutdownBehavior?: AttributeValue;
    instanceType?: AttributeValue;
    kernelId?: AttributeValue;
    productCodes?: ProductCode[];
    ramdiskId?: AttributeValue;
    rootDeviceName?: AttributeValue;
    sourceDestCheck?: AttributeBooleanValue;
    sriovNetSupport?: AttributeValue;
    userData?: AttributeValue;
}

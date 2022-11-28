import { SpeakeasyBase } from "../../../internal/utils";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { AttributeValue } from "./attributevalue";
import { LaunchPermission } from "./launchpermission";
import { ProductCode } from "./productcode";
/**
 * Describes an image attribute.
**/
export declare class ImageAttribute extends SpeakeasyBase {
    blockDeviceMappings?: BlockDeviceMapping[];
    bootMode?: AttributeValue;
    description?: AttributeValue;
    imageId?: string;
    kernelId?: AttributeValue;
    launchPermissions?: LaunchPermission[];
    productCodes?: ProductCode[];
    ramdiskId?: AttributeValue;
    sriovNetSupport?: AttributeValue;
}

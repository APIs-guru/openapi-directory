import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeBooleanValue } from "./attributebooleanvalue";
import { ProductCode } from "./productcode";
export declare class DescribeVolumeAttributeResult extends SpeakeasyBase {
    autoEnableIo?: AttributeBooleanValue;
    productCodes?: ProductCode[];
    volumeId?: string;
}

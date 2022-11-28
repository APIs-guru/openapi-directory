import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.
**/
export declare class PciId extends SpeakeasyBase {
    deviceId?: string;
    subsystemId?: string;
    subsystemVendorId?: string;
    vendorId?: string;
}

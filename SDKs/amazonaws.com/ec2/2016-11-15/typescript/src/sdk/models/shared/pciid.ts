import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PciId
/** 
 * Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.
**/
export class PciId extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deviceId?: string;

  @SpeakeasyMetadata()
  subsystemId?: string;

  @SpeakeasyMetadata()
  subsystemVendorId?: string;

  @SpeakeasyMetadata()
  vendorId?: string;
}

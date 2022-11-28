import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { User } from "./user";



// VirtualMfaDevice
/** 
 * Contains information about a virtual MFA device.
**/
export class VirtualMfaDevice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  base32StringSeed?: string;

  @SpeakeasyMetadata()
  enableDate?: Date;

  @SpeakeasyMetadata()
  qrCodePng?: string;

  @SpeakeasyMetadata()
  serialNumber: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  user?: User;
}

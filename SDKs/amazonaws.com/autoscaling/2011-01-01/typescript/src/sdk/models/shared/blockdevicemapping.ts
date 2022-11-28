import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ebs } from "./ebs";



// BlockDeviceMapping
/** 
 * Describes a block device mapping.
**/
export class BlockDeviceMapping extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deviceName: string;

  @SpeakeasyMetadata()
  ebs?: Ebs;

  @SpeakeasyMetadata()
  noDevice?: boolean;

  @SpeakeasyMetadata()
  virtualName?: string;
}

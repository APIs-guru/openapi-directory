import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TenancyEnum } from "./tenancyenum";



// SpotPlacement
/** 
 * Describes Spot Instance placement.
**/
export class SpotPlacement extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  groupName?: string;

  @SpeakeasyMetadata()
  tenancy?: TenancyEnum;
}

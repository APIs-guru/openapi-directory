import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TenancyEnum } from "./tenancyenum";



// LaunchTemplatePlacement
/** 
 * Describes the placement of an instance.
**/
export class LaunchTemplatePlacement extends SpeakeasyBase {
  @SpeakeasyMetadata()
  affinity?: string;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  groupName?: string;

  @SpeakeasyMetadata()
  hostId?: string;

  @SpeakeasyMetadata()
  hostResourceGroupArn?: string;

  @SpeakeasyMetadata()
  partitionNumber?: number;

  @SpeakeasyMetadata()
  spreadDomain?: string;

  @SpeakeasyMetadata()
  tenancy?: TenancyEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { LocationTypeEnum } from "./locationtypeenum";



// InstanceTypeOffering
/** 
 * The instance types offered.
**/
export class InstanceTypeOffering extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata()
  location?: string;

  @SpeakeasyMetadata()
  locationType?: LocationTypeEnum;
}

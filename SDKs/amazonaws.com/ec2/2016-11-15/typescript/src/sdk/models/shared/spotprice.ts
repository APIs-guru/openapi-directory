import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { RiProductDescriptionEnum } from "./riproductdescriptionenum";



// SpotPrice
/** 
 * Describes the maximum price per hour that you are willing to pay for a Spot Instance.
**/
export class SpotPrice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata()
  productDescription?: RiProductDescriptionEnum;

  @SpeakeasyMetadata()
  spotPrice?: string;

  @SpeakeasyMetadata()
  timestamp?: Date;
}

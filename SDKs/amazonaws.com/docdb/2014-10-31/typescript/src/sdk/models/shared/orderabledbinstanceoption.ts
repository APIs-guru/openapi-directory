import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";



// OrderableDbInstanceOption
/** 
 * The options that are available for an instance.
**/
export class OrderableDbInstanceOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AvailabilityZone })
  availabilityZones?: AvailabilityZone[];

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  licenseModel?: string;

  @SpeakeasyMetadata()
  vpc?: boolean;
}

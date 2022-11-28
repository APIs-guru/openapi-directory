import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpotInstanceStateFault } from "./spotinstancestatefault";
import { InstanceInterruptionBehaviorEnum } from "./instanceinterruptionbehaviorenum";
import { LaunchSpecification } from "./launchspecification";
import { RiProductDescriptionEnum } from "./riproductdescriptionenum";
import { SpotInstanceStateEnum } from "./spotinstancestateenum";
import { SpotInstanceStatus } from "./spotinstancestatus";
import { Tag } from "./tag";
import { SpotInstanceTypeEnum } from "./spotinstancetypeenum";



// SpotInstanceRequest
/** 
 * Describes a Spot Instance request.
**/
export class SpotInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actualBlockHourlyPrice?: string;

  @SpeakeasyMetadata()
  availabilityZoneGroup?: string;

  @SpeakeasyMetadata()
  blockDurationMinutes?: number;

  @SpeakeasyMetadata()
  createTime?: Date;

  @SpeakeasyMetadata()
  fault?: SpotInstanceStateFault;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  instanceInterruptionBehavior?: InstanceInterruptionBehaviorEnum;

  @SpeakeasyMetadata()
  launchGroup?: string;

  @SpeakeasyMetadata()
  launchSpecification?: LaunchSpecification;

  @SpeakeasyMetadata()
  launchedAvailabilityZone?: string;

  @SpeakeasyMetadata()
  productDescription?: RiProductDescriptionEnum;

  @SpeakeasyMetadata()
  spotInstanceRequestId?: string;

  @SpeakeasyMetadata()
  spotPrice?: string;

  @SpeakeasyMetadata()
  state?: SpotInstanceStateEnum;

  @SpeakeasyMetadata()
  status?: SpotInstanceStatus;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  type?: SpotInstanceTypeEnum;

  @SpeakeasyMetadata()
  validFrom?: Date;

  @SpeakeasyMetadata()
  validUntil?: Date;
}

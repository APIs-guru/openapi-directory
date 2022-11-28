import { SpeakeasyBase } from "../../../internal/utils";
import { SpotInstanceStateFault } from "./spotinstancestatefault";
import { InstanceInterruptionBehaviorEnum } from "./instanceinterruptionbehaviorenum";
import { LaunchSpecification } from "./launchspecification";
import { RiProductDescriptionEnum } from "./riproductdescriptionenum";
import { SpotInstanceStateEnum } from "./spotinstancestateenum";
import { SpotInstanceStatus } from "./spotinstancestatus";
import { Tag } from "./tag";
import { SpotInstanceTypeEnum } from "./spotinstancetypeenum";
/**
 * Describes a Spot Instance request.
**/
export declare class SpotInstanceRequest extends SpeakeasyBase {
    actualBlockHourlyPrice?: string;
    availabilityZoneGroup?: string;
    blockDurationMinutes?: number;
    createTime?: Date;
    fault?: SpotInstanceStateFault;
    instanceId?: string;
    instanceInterruptionBehavior?: InstanceInterruptionBehaviorEnum;
    launchGroup?: string;
    launchSpecification?: LaunchSpecification;
    launchedAvailabilityZone?: string;
    productDescription?: RiProductDescriptionEnum;
    spotInstanceRequestId?: string;
    spotPrice?: string;
    state?: SpotInstanceStateEnum;
    status?: SpotInstanceStatus;
    tags?: Tag[];
    type?: SpotInstanceTypeEnum;
    validFrom?: Date;
    validUntil?: Date;
}

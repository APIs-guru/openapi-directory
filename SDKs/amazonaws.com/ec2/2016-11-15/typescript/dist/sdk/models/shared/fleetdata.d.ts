import { SpeakeasyBase } from "../../../internal/utils";
import { FleetActivityStatusEnum } from "./fleetactivitystatusenum";
import { DescribeFleetError } from "./describefleeterror";
import { FleetExcessCapacityTerminationPolicyEnum } from "./fleetexcesscapacityterminationpolicyenum";
import { FleetStateCodeEnum } from "./fleetstatecodeenum";
import { DescribeFleetsInstances } from "./describefleetsinstances";
import { FleetLaunchTemplateConfig } from "./fleetlaunchtemplateconfig";
import { OnDemandOptions } from "./ondemandoptions";
import { SpotOptions } from "./spotoptions";
import { Tag } from "./tag";
import { TargetCapacitySpecification } from "./targetcapacityspecification";
import { FleetTypeEnum } from "./fleettypeenum";
/**
 * Describes an EC2 Fleet.
**/
export declare class FleetData extends SpeakeasyBase {
    activityStatus?: FleetActivityStatusEnum;
    clientToken?: string;
    context?: string;
    createTime?: Date;
    errors?: DescribeFleetError[];
    excessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicyEnum;
    fleetId?: string;
    fleetState?: FleetStateCodeEnum;
    fulfilledCapacity?: number;
    fulfilledOnDemandCapacity?: number;
    instances?: DescribeFleetsInstances[];
    launchTemplateConfigs?: FleetLaunchTemplateConfig[];
    onDemandOptions?: OnDemandOptions;
    replaceUnhealthyInstances?: boolean;
    spotOptions?: SpotOptions;
    tags?: Tag[];
    targetCapacitySpecification?: TargetCapacitySpecification;
    terminateInstancesWithExpiration?: boolean;
    type?: FleetTypeEnum;
    validFrom?: Date;
    validUntil?: Date;
}

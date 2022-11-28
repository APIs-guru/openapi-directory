import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { LaunchTypeEnum } from "./launchtypeenum";
import { NetworkConfiguration } from "./networkconfiguration";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { Tag } from "./tag";
/**
 * The custom parameters to be used when the target is an Amazon ECS task.
**/
export declare class EcsParameters extends SpeakeasyBase {
    capacityProviderStrategy?: CapacityProviderStrategyItem[];
    enableEcsManagedTags?: boolean;
    enableExecuteCommand?: boolean;
    group?: string;
    launchType?: LaunchTypeEnum;
    networkConfiguration?: NetworkConfiguration;
    placementConstraints?: PlacementConstraint[];
    placementStrategy?: PlacementStrategy[];
    platformVersion?: string;
    propagateTags?: PropagateTagsEnum;
    referenceId?: string;
    tags?: Tag[];
    taskCount?: number;
    taskDefinitionArn: string;
}

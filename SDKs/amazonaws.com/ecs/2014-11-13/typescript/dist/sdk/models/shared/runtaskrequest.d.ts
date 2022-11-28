import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { LaunchTypeEnum } from "./launchtypeenum";
import { NetworkConfiguration } from "./networkconfiguration";
import { TaskOverride } from "./taskoverride";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { Tag } from "./tag";
export declare class RunTaskRequest extends SpeakeasyBase {
    capacityProviderStrategy?: CapacityProviderStrategyItem[];
    cluster?: string;
    count?: number;
    enableEcsManagedTags?: boolean;
    enableExecuteCommand?: boolean;
    group?: string;
    launchType?: LaunchTypeEnum;
    networkConfiguration?: NetworkConfiguration;
    overrides?: TaskOverride;
    placementConstraints?: PlacementConstraint[];
    placementStrategy?: PlacementStrategy[];
    platformVersion?: string;
    propagateTags?: PropagateTagsEnum;
    referenceId?: string;
    startedBy?: string;
    tags?: Tag[];
    taskDefinition: string;
}

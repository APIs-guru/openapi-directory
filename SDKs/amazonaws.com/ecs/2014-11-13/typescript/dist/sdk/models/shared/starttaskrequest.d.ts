import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkConfiguration } from "./networkconfiguration";
import { TaskOverride } from "./taskoverride";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { Tag } from "./tag";
export declare class StartTaskRequest extends SpeakeasyBase {
    cluster?: string;
    containerInstances: string[];
    enableEcsManagedTags?: boolean;
    enableExecuteCommand?: boolean;
    group?: string;
    networkConfiguration?: NetworkConfiguration;
    overrides?: TaskOverride;
    propagateTags?: PropagateTagsEnum;
    referenceId?: string;
    startedBy?: string;
    tags?: Tag[];
    taskDefinition: string;
}

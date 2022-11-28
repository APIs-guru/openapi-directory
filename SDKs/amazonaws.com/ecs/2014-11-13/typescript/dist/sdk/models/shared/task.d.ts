import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { Attribute } from "./attribute";
import { ConnectivityEnum } from "./connectivityenum";
import { Container } from "./container";
import { EphemeralStorage } from "./ephemeralstorage";
import { HealthStatusEnum } from "./healthstatusenum";
import { InferenceAccelerator } from "./inferenceaccelerator";
import { LaunchTypeEnum } from "./launchtypeenum";
import { TaskOverride } from "./taskoverride";
import { TaskStopCodeEnum } from "./taskstopcodeenum";
import { Tag } from "./tag";
/**
 * Details on a task in a cluster.
**/
export declare class Task extends SpeakeasyBase {
    attachments?: Attachment[];
    attributes?: Attribute[];
    availabilityZone?: string;
    capacityProviderName?: string;
    clusterArn?: string;
    connectivity?: ConnectivityEnum;
    connectivityAt?: Date;
    containerInstanceArn?: string;
    containers?: Container[];
    cpu?: string;
    createdAt?: Date;
    desiredStatus?: string;
    enableExecuteCommand?: boolean;
    ephemeralStorage?: EphemeralStorage;
    executionStoppedAt?: Date;
    group?: string;
    healthStatus?: HealthStatusEnum;
    inferenceAccelerators?: InferenceAccelerator[];
    lastStatus?: string;
    launchType?: LaunchTypeEnum;
    memory?: string;
    overrides?: TaskOverride;
    platformVersion?: string;
    pullStartedAt?: Date;
    pullStoppedAt?: Date;
    startedAt?: Date;
    startedBy?: string;
    stopCode?: TaskStopCodeEnum;
    stoppedAt?: Date;
    stoppedReason?: string;
    stoppingAt?: Date;
    tags?: Tag[];
    taskArn?: string;
    taskDefinitionArn?: string;
    version?: number;
}

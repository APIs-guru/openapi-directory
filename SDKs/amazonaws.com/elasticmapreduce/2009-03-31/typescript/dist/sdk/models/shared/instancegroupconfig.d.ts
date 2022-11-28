import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicy } from "./autoscalingpolicy";
import { Configuration } from "./configuration";
import { EbsConfiguration } from "./ebsconfiguration";
import { InstanceRoleTypeEnum } from "./instanceroletypeenum";
import { MarketTypeEnum } from "./markettypeenum";
/**
 * Configuration defining a new instance group.
**/
export declare class InstanceGroupConfig extends SpeakeasyBase {
    autoScalingPolicy?: AutoScalingPolicy;
    bidPrice?: string;
    configurations?: Configuration[];
    customAmiId?: string;
    ebsConfiguration?: EbsConfiguration;
    instanceCount: number;
    instanceRole: InstanceRoleTypeEnum;
    instanceType: string;
    market?: MarketTypeEnum;
    name?: string;
}

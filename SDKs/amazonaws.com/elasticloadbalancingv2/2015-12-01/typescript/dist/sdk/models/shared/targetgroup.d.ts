import { SpeakeasyBase } from "../../../internal/utils";
import { ProtocolEnumEnum } from "./protocolenumenum";
import { Matcher } from "./matcher";
import { TargetTypeEnumEnum } from "./targettypeenumenum";
/**
 * Information about a target group.
**/
export declare class TargetGroup extends SpeakeasyBase {
    healthCheckEnabled?: boolean;
    healthCheckIntervalSeconds?: number;
    healthCheckPath?: string;
    healthCheckPort?: string;
    healthCheckProtocol?: ProtocolEnumEnum;
    healthCheckTimeoutSeconds?: number;
    healthyThresholdCount?: number;
    loadBalancerArns?: string[];
    matcher?: Matcher;
    port?: number;
    protocol?: ProtocolEnumEnum;
    protocolVersion?: string;
    targetGroupArn?: string;
    targetGroupName?: string;
    targetType?: TargetTypeEnumEnum;
    unhealthyThresholdCount?: number;
    vpcId?: string;
}

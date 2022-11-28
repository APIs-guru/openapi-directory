import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtocolEnumEnum } from "./protocolenumenum";
import { Matcher } from "./matcher";
import { TargetTypeEnumEnum } from "./targettypeenumenum";



// TargetGroup
/** 
 * Information about a target group.
**/
export class TargetGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  healthCheckEnabled?: boolean;

  @SpeakeasyMetadata()
  healthCheckIntervalSeconds?: number;

  @SpeakeasyMetadata()
  healthCheckPath?: string;

  @SpeakeasyMetadata()
  healthCheckPort?: string;

  @SpeakeasyMetadata()
  healthCheckProtocol?: ProtocolEnumEnum;

  @SpeakeasyMetadata()
  healthCheckTimeoutSeconds?: number;

  @SpeakeasyMetadata()
  healthyThresholdCount?: number;

  @SpeakeasyMetadata()
  loadBalancerArns?: string[];

  @SpeakeasyMetadata()
  matcher?: Matcher;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  protocol?: ProtocolEnumEnum;

  @SpeakeasyMetadata()
  protocolVersion?: string;

  @SpeakeasyMetadata()
  targetGroupArn?: string;

  @SpeakeasyMetadata()
  targetGroupName?: string;

  @SpeakeasyMetadata()
  targetType?: TargetTypeEnumEnum;

  @SpeakeasyMetadata()
  unhealthyThresholdCount?: number;

  @SpeakeasyMetadata()
  vpcId?: string;
}

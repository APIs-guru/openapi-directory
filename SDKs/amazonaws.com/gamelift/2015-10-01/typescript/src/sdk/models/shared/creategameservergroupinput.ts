import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServerGroupAutoScalingPolicy } from "./gameservergroupautoscalingpolicy";
import { BalancingStrategyEnum } from "./balancingstrategyenum";
import { GameServerProtectionPolicyEnum } from "./gameserverprotectionpolicyenum";
import { InstanceDefinition } from "./instancedefinition";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { Tag } from "./tag";



export class CreateGameServerGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingPolicy" })
  autoScalingPolicy?: GameServerGroupAutoScalingPolicy;

  @SpeakeasyMetadata({ data: "json, name=BalancingStrategy" })
  balancingStrategy?: BalancingStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=GameServerProtectionPolicy" })
  gameServerProtectionPolicy?: GameServerProtectionPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=InstanceDefinitions", elemType: InstanceDefinition })
  instanceDefinitions: InstanceDefinition[];

  @SpeakeasyMetadata({ data: "json, name=LaunchTemplate" })
  launchTemplate: LaunchTemplateSpecification;

  @SpeakeasyMetadata({ data: "json, name=MaxSize" })
  maxSize: number;

  @SpeakeasyMetadata({ data: "json, name=MinSize" })
  minSize: number;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VpcSubnets" })
  vpcSubnets?: string[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GameServerGroupAutoScalingPolicy } from "./gameservergroupautoscalingpolicy";
import { BalancingStrategyEnum } from "./balancingstrategyenum";
import { GameServerProtectionPolicyEnum } from "./gameserverprotectionpolicyenum";
import { InstanceDefinition } from "./instancedefinition";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { Tag } from "./tag";


export class CreateGameServerGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingPolicy" })
  autoScalingPolicy?: GameServerGroupAutoScalingPolicy;

  @Metadata({ data: "json, name=BalancingStrategy" })
  balancingStrategy?: BalancingStrategyEnum;

  @Metadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @Metadata({ data: "json, name=GameServerProtectionPolicy" })
  gameServerProtectionPolicy?: GameServerProtectionPolicyEnum;

  @Metadata({ data: "json, name=InstanceDefinitions", elemType: shared.InstanceDefinition })
  instanceDefinitions: InstanceDefinition[];

  @Metadata({ data: "json, name=LaunchTemplate" })
  launchTemplate: LaunchTemplateSpecification;

  @Metadata({ data: "json, name=MaxSize" })
  maxSize: number;

  @Metadata({ data: "json, name=MinSize" })
  minSize: number;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VpcSubnets" })
  vpcSubnets?: string[];
}

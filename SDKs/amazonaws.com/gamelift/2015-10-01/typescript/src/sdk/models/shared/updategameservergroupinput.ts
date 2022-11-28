import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BalancingStrategyEnum } from "./balancingstrategyenum";
import { GameServerProtectionPolicyEnum } from "./gameserverprotectionpolicyenum";
import { InstanceDefinition } from "./instancedefinition";



export class UpdateGameServerGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BalancingStrategy" })
  balancingStrategy?: BalancingStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=GameServerProtectionPolicy" })
  gameServerProtectionPolicy?: GameServerProtectionPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=InstanceDefinitions", elemType: InstanceDefinition })
  instanceDefinitions?: InstanceDefinition[];

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}

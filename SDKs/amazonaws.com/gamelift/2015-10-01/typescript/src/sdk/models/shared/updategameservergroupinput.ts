import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BalancingStrategyEnum } from "./balancingstrategyenum";
import { GameServerProtectionPolicyEnum } from "./gameserverprotectionpolicyenum";
import { InstanceDefinition } from "./instancedefinition";


export class UpdateGameServerGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BalancingStrategy" })
  balancingStrategy?: BalancingStrategyEnum;

  @Metadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @Metadata({ data: "json, name=GameServerProtectionPolicy" })
  gameServerProtectionPolicy?: GameServerProtectionPolicyEnum;

  @Metadata({ data: "json, name=InstanceDefinitions", elemType: shared.InstanceDefinition })
  instanceDefinitions?: InstanceDefinition[];

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}

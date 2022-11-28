import { SpeakeasyBase } from "../../../internal/utils";
import { BalancingStrategyEnum } from "./balancingstrategyenum";
import { GameServerProtectionPolicyEnum } from "./gameserverprotectionpolicyenum";
import { InstanceDefinition } from "./instancedefinition";
export declare class UpdateGameServerGroupInput extends SpeakeasyBase {
    balancingStrategy?: BalancingStrategyEnum;
    gameServerGroupName: string;
    gameServerProtectionPolicy?: GameServerProtectionPolicyEnum;
    instanceDefinitions?: InstanceDefinition[];
    roleArn?: string;
}

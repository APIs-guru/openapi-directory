import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { DeploymentConfiguration } from "./deploymentconfiguration";
import { NetworkConfiguration } from "./networkconfiguration";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
export declare class UpdateServiceRequest extends SpeakeasyBase {
    capacityProviderStrategy?: CapacityProviderStrategyItem[];
    cluster?: string;
    deploymentConfiguration?: DeploymentConfiguration;
    desiredCount?: number;
    enableExecuteCommand?: boolean;
    forceNewDeployment?: boolean;
    healthCheckGracePeriodSeconds?: number;
    networkConfiguration?: NetworkConfiguration;
    placementConstraints?: PlacementConstraint[];
    placementStrategy?: PlacementStrategy[];
    platformVersion?: string;
    service: string;
    taskDefinition?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { DeploymentConfiguration } from "./deploymentconfiguration";
import { NetworkConfiguration } from "./networkconfiguration";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";



export class UpdateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityProviderStrategy", elemType: CapacityProviderStrategyItem })
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentConfiguration" })
  deploymentConfiguration?: DeploymentConfiguration;

  @SpeakeasyMetadata({ data: "json, name=desiredCount" })
  desiredCount?: number;

  @SpeakeasyMetadata({ data: "json, name=enableExecuteCommand" })
  enableExecuteCommand?: boolean;

  @SpeakeasyMetadata({ data: "json, name=forceNewDeployment" })
  forceNewDeployment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=healthCheckGracePeriodSeconds" })
  healthCheckGracePeriodSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @SpeakeasyMetadata({ data: "json, name=placementConstraints", elemType: PlacementConstraint })
  placementConstraints?: PlacementConstraint[];

  @SpeakeasyMetadata({ data: "json, name=placementStrategy", elemType: PlacementStrategy })
  placementStrategy?: PlacementStrategy[];

  @SpeakeasyMetadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: string;

  @SpeakeasyMetadata({ data: "json, name=taskDefinition" })
  taskDefinition?: string;
}

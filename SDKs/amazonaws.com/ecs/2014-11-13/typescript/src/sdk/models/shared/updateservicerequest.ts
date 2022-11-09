import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { DeploymentConfiguration } from "./deploymentconfiguration";
import { NetworkConfiguration } from "./networkconfiguration";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";


export class UpdateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityProviderStrategy", elemType: shared.CapacityProviderStrategyItem })
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=deploymentConfiguration" })
  deploymentConfiguration?: DeploymentConfiguration;

  @Metadata({ data: "json, name=desiredCount" })
  desiredCount?: number;

  @Metadata({ data: "json, name=enableExecuteCommand" })
  enableExecuteCommand?: boolean;

  @Metadata({ data: "json, name=forceNewDeployment" })
  forceNewDeployment?: boolean;

  @Metadata({ data: "json, name=healthCheckGracePeriodSeconds" })
  healthCheckGracePeriodSeconds?: number;

  @Metadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @Metadata({ data: "json, name=placementConstraints", elemType: shared.PlacementConstraint })
  placementConstraints?: PlacementConstraint[];

  @Metadata({ data: "json, name=placementStrategy", elemType: shared.PlacementStrategy })
  placementStrategy?: PlacementStrategy[];

  @Metadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @Metadata({ data: "json, name=service" })
  service: string;

  @Metadata({ data: "json, name=taskDefinition" })
  taskDefinition?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { LaunchTypeEnum } from "./launchtypeenum";
import { NetworkConfiguration } from "./networkconfiguration";
import { TaskOverride } from "./taskoverride";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { Tag } from "./tag";



export class RunTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityProviderStrategy", elemType: CapacityProviderStrategyItem })
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=enableECSManagedTags" })
  enableEcsManagedTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableExecuteCommand" })
  enableExecuteCommand?: boolean;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @SpeakeasyMetadata({ data: "json, name=overrides" })
  overrides?: TaskOverride;

  @SpeakeasyMetadata({ data: "json, name=placementConstraints", elemType: PlacementConstraint })
  placementConstraints?: PlacementConstraint[];

  @SpeakeasyMetadata({ data: "json, name=placementStrategy", elemType: PlacementStrategy })
  placementStrategy?: PlacementStrategy[];

  @SpeakeasyMetadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=propagateTags" })
  propagateTags?: PropagateTagsEnum;

  @SpeakeasyMetadata({ data: "json, name=referenceId" })
  referenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=startedBy" })
  startedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=taskDefinition" })
  taskDefinition: string;
}

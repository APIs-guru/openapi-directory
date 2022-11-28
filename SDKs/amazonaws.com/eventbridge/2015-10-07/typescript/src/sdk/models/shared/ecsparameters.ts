import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { LaunchTypeEnum } from "./launchtypeenum";
import { NetworkConfiguration } from "./networkconfiguration";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { Tag } from "./tag";



// EcsParameters
/** 
 * The custom parameters to be used when the target is an Amazon ECS task.
**/
export class EcsParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CapacityProviderStrategy", elemType: CapacityProviderStrategyItem })
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  @SpeakeasyMetadata({ data: "json, name=EnableECSManagedTags" })
  enableEcsManagedTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableExecuteCommand" })
  enableExecuteCommand?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=LaunchType" })
  launchType?: LaunchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=NetworkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @SpeakeasyMetadata({ data: "json, name=PlacementConstraints", elemType: PlacementConstraint })
  placementConstraints?: PlacementConstraint[];

  @SpeakeasyMetadata({ data: "json, name=PlacementStrategy", elemType: PlacementStrategy })
  placementStrategy?: PlacementStrategy[];

  @SpeakeasyMetadata({ data: "json, name=PlatformVersion" })
  platformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=PropagateTags" })
  propagateTags?: PropagateTagsEnum;

  @SpeakeasyMetadata({ data: "json, name=ReferenceId" })
  referenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TaskCount" })
  taskCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaskDefinitionArn" })
  taskDefinitionArn: string;
}

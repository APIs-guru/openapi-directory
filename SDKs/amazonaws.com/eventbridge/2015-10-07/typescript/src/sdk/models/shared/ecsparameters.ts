import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=CapacityProviderStrategy", elemType: shared.CapacityProviderStrategyItem })
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  @Metadata({ data: "json, name=EnableECSManagedTags" })
  enableEcsManagedTags?: boolean;

  @Metadata({ data: "json, name=EnableExecuteCommand" })
  enableExecuteCommand?: boolean;

  @Metadata({ data: "json, name=Group" })
  group?: string;

  @Metadata({ data: "json, name=LaunchType" })
  launchType?: LaunchTypeEnum;

  @Metadata({ data: "json, name=NetworkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @Metadata({ data: "json, name=PlacementConstraints", elemType: shared.PlacementConstraint })
  placementConstraints?: PlacementConstraint[];

  @Metadata({ data: "json, name=PlacementStrategy", elemType: shared.PlacementStrategy })
  placementStrategy?: PlacementStrategy[];

  @Metadata({ data: "json, name=PlatformVersion" })
  platformVersion?: string;

  @Metadata({ data: "json, name=PropagateTags" })
  propagateTags?: PropagateTagsEnum;

  @Metadata({ data: "json, name=ReferenceId" })
  referenceId?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TaskCount" })
  taskCount?: number;

  @Metadata({ data: "json, name=TaskDefinitionArn" })
  taskDefinitionArn: string;
}

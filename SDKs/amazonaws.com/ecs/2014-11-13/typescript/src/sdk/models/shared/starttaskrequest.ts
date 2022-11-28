import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkConfiguration } from "./networkconfiguration";
import { TaskOverride } from "./taskoverride";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { Tag } from "./tag";



export class StartTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=containerInstances" })
  containerInstances: string[];

  @SpeakeasyMetadata({ data: "json, name=enableECSManagedTags" })
  enableEcsManagedTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableExecuteCommand" })
  enableExecuteCommand?: boolean;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @SpeakeasyMetadata({ data: "json, name=overrides" })
  overrides?: TaskOverride;

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

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NetworkConfiguration } from "./networkconfiguration";
import { TaskOverride } from "./taskoverride";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { Tag } from "./tag";


export class StartTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=containerInstances" })
  containerInstances: string[];

  @Metadata({ data: "json, name=enableECSManagedTags" })
  enableEcsManagedTags?: boolean;

  @Metadata({ data: "json, name=enableExecuteCommand" })
  enableExecuteCommand?: boolean;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @Metadata({ data: "json, name=overrides" })
  overrides?: TaskOverride;

  @Metadata({ data: "json, name=propagateTags" })
  propagateTags?: PropagateTagsEnum;

  @Metadata({ data: "json, name=referenceId" })
  referenceId?: string;

  @Metadata({ data: "json, name=startedBy" })
  startedBy?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=taskDefinition" })
  taskDefinition: string;
}

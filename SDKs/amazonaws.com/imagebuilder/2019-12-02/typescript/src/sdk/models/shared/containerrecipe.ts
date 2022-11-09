import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComponentConfiguration } from "./componentconfiguration";
import { ContainerTypeEnum } from "./containertypeenum";
import { InstanceConfiguration } from "./instanceconfiguration";
import { PlatformEnum } from "./platformenum";
import { TargetContainerRepository } from "./targetcontainerrepository";


// ContainerRecipe
/** 
 * A container recipe.
**/
export class ContainerRecipe extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=components", elemType: shared.ComponentConfiguration })
  components?: ComponentConfiguration[];

  @Metadata({ data: "json, name=containerType" })
  containerType?: ContainerTypeEnum;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dockerfileTemplateData" })
  dockerfileTemplateData?: string;

  @Metadata({ data: "json, name=encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=instanceConfiguration" })
  instanceConfiguration?: InstanceConfiguration;

  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=parentImage" })
  parentImage?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: PlatformEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=targetRepository" })
  targetRepository?: TargetContainerRepository;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=workingDirectory" })
  workingDirectory?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=components", elemType: ComponentConfiguration })
  components?: ComponentConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=containerType" })
  containerType?: ContainerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerfileTemplateData" })
  dockerfileTemplateData?: string;

  @SpeakeasyMetadata({ data: "json, name=encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=instanceConfiguration" })
  instanceConfiguration?: InstanceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=parentImage" })
  parentImage?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: PlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=targetRepository" })
  targetRepository?: TargetContainerRepository;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=workingDirectory" })
  workingDirectory?: string;
}

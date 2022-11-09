import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdditionalInstanceConfiguration } from "./additionalinstanceconfiguration";
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";
import { ComponentConfiguration } from "./componentconfiguration";
import { PlatformEnum } from "./platformenum";
import { ImageTypeEnum } from "./imagetypeenum";


// ImageRecipe
/** 
 * An image recipe.
**/
export class ImageRecipe extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalInstanceConfiguration" })
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=blockDeviceMappings", elemType: shared.InstanceBlockDeviceMapping })
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  @Metadata({ data: "json, name=components", elemType: shared.ComponentConfiguration })
  components?: ComponentConfiguration[];

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

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

  @Metadata({ data: "json, name=type" })
  type?: ImageTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=workingDirectory" })
  workingDirectory?: string;
}

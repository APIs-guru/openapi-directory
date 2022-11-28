import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=additionalInstanceConfiguration" })
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=blockDeviceMappings", elemType: InstanceBlockDeviceMapping })
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  @SpeakeasyMetadata({ data: "json, name=components", elemType: ComponentConfiguration })
  components?: ComponentConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

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

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ImageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=workingDirectory" })
  workingDirectory?: string;
}

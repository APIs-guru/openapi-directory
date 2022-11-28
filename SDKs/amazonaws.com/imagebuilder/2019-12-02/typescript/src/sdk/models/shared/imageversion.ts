import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlatformEnum } from "./platformenum";
import { ImageTypeEnum } from "./imagetypeenum";



// ImageVersion
/** 
 * The defining characteristics of a specific version of an Image Builder image.
**/
export class ImageVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: PlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ImageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}

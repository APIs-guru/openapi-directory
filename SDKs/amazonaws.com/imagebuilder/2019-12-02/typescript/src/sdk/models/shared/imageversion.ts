import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlatformEnum } from "./platformenum";
import { ImageTypeEnum } from "./imagetypeenum";


// ImageVersion
/** 
 * The defining characteristics of a specific version of an Image Builder image.
**/
export class ImageVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: PlatformEnum;

  @Metadata({ data: "json, name=type" })
  type?: ImageTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}

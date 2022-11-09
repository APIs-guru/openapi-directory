import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OutputResources } from "./outputresources";
import { PlatformEnum } from "./platformenum";
import { ImageState } from "./imagestate";
import { ImageTypeEnum } from "./imagetypeenum";


// ImageSummary
/** 
 * An image summary.
**/
export class ImageSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @Metadata({ data: "json, name=outputResources" })
  outputResources?: OutputResources;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: PlatformEnum;

  @Metadata({ data: "json, name=state" })
  state?: ImageState;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: ImageTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}

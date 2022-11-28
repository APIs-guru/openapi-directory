import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputResources } from "./outputresources";
import { PlatformEnum } from "./platformenum";
import { ImageState } from "./imagestate";
import { ImageTypeEnum } from "./imagetypeenum";



// ImageSummary
/** 
 * An image summary.
**/
export class ImageSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=outputResources" })
  outputResources?: OutputResources;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: PlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ImageState;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ImageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}

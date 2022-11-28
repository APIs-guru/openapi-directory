import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerTypeEnum } from "./containertypeenum";
import { PlatformEnum } from "./platformenum";



// ContainerRecipeSummary
/** 
 * A summary of a container recipe
**/
export class ContainerRecipeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=containerType" })
  containerType?: ContainerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

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
}

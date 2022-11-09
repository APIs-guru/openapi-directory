import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerTypeEnum } from "./containertypeenum";
import { PlatformEnum } from "./platformenum";


// ContainerRecipeSummary
/** 
 * A summary of a container recipe
**/
export class ContainerRecipeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=containerType" })
  containerType?: ContainerTypeEnum;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

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
}

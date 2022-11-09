import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlatformEnum } from "./platformenum";


// ImageRecipeSummary
/** 
 * A summary of an image recipe.
**/
export class ImageRecipeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

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

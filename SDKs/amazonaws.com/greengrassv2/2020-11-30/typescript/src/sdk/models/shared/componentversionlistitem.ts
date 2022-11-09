import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComponentVersionListItem
/** 
 * Contains information about a component version in a list.
**/
export class ComponentVersionListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=componentName" })
  componentName?: string;

  @Metadata({ data: "json, name=componentVersion" })
  componentVersion?: string;
}

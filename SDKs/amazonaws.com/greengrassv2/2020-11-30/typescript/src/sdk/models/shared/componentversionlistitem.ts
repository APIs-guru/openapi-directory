import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComponentVersionListItem
/** 
 * Contains information about a component version in a list.
**/
export class ComponentVersionListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=componentName" })
  componentName?: string;

  @SpeakeasyMetadata({ data: "json, name=componentVersion" })
  componentVersion?: string;
}

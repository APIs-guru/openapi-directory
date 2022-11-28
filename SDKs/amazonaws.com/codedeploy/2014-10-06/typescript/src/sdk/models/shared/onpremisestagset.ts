import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagFilter } from "./tagfilter";



// OnPremisesTagSet
/** 
 * Information about groups of on-premises instance tags.
**/
export class OnPremisesTagSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=onPremisesTagSetList", elemType: TagFilter, elemDepth: 2 })
  onPremisesTagSetList?: TagFilter[][];
}

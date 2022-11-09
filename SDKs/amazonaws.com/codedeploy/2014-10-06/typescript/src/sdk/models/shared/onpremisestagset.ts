import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagFilter } from "./tagfilter";


// OnPremisesTagSet
/** 
 * Information about groups of on-premises instance tags.
**/
export class OnPremisesTagSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=onPremisesTagSetList", elemType: shared.TagFilter, elemDepth: 2 })
  onPremisesTagSetList?: TagFilter[][];
}

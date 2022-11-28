import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagDescription } from "./tagdescription";



// DescribeTagsOutput
/** 
 * Contains the output for DescribeTags.
**/
export class DescribeTagsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TagDescription })
  tagDescriptions?: TagDescription[];
}

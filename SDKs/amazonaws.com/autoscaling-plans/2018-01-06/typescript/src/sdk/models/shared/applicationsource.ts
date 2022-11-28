import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagFilter } from "./tagfilter";



// ApplicationSource
/** 
 * Represents an application source.
**/
export class ApplicationSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudFormationStackARN" })
  cloudFormationStackArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TagFilters", elemType: TagFilter })
  tagFilters?: TagFilter[];
}

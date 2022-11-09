import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagFilter } from "./tagfilter";


// ApplicationSource
/** 
 * Represents an application source.
**/
export class ApplicationSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudFormationStackARN" })
  cloudFormationStackArn?: string;

  @Metadata({ data: "json, name=TagFilters", elemType: shared.TagFilter })
  tagFilters?: TagFilter[];
}

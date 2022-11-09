import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MergeOptionTypeEnumEnum } from "./mergeoptiontypeenumenum";


// MergeMetadata
/** 
 * Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.
**/
export class MergeMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=isMerged" })
  isMerged?: boolean;

  @Metadata({ data: "json, name=mergeCommitId" })
  mergeCommitId?: string;

  @Metadata({ data: "json, name=mergeOption" })
  mergeOption?: MergeOptionTypeEnumEnum;

  @Metadata({ data: "json, name=mergedBy" })
  mergedBy?: string;
}

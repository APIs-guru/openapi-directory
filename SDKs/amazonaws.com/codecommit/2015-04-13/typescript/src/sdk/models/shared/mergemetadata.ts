import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MergeOptionTypeEnumEnum } from "./mergeoptiontypeenumenum";



// MergeMetadata
/** 
 * Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.
**/
export class MergeMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isMerged" })
  isMerged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mergeCommitId" })
  mergeCommitId?: string;

  @SpeakeasyMetadata({ data: "json, name=mergeOption" })
  mergeOption?: MergeOptionTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=mergedBy" })
  mergedBy?: string;
}

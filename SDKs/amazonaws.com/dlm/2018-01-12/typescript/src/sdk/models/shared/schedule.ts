import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateRule } from "./createrule";
import { CrossRegionCopyRule } from "./crossregioncopyrule";
import { DeprecateRule } from "./deprecaterule";
import { FastRestoreRule } from "./fastrestorerule";
import { RetainRule } from "./retainrule";
import { ShareRule } from "./sharerule";
import { Tag } from "./tag";



// Schedule
/** 
 * Specifies a backup schedule for a snapshot or AMI lifecycle policy.
**/
export class Schedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CopyTags" })
  copyTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreateRule" })
  createRule?: CreateRule;

  @SpeakeasyMetadata({ data: "json, name=CrossRegionCopyRules", elemType: CrossRegionCopyRule })
  crossRegionCopyRules?: CrossRegionCopyRule[];

  @SpeakeasyMetadata({ data: "json, name=DeprecateRule" })
  deprecateRule?: DeprecateRule;

  @SpeakeasyMetadata({ data: "json, name=FastRestoreRule" })
  fastRestoreRule?: FastRestoreRule;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RetainRule" })
  retainRule?: RetainRule;

  @SpeakeasyMetadata({ data: "json, name=ShareRules", elemType: ShareRule })
  shareRules?: ShareRule[];

  @SpeakeasyMetadata({ data: "json, name=TagsToAdd", elemType: Tag })
  tagsToAdd?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VariableTags", elemType: Tag })
  variableTags?: Tag[];
}

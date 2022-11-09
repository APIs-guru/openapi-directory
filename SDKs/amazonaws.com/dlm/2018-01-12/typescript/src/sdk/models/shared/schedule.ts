import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreateRule } from "./createrule";
import { CrossRegionCopyRule } from "./crossregioncopyrule";
import { DeprecateRule } from "./deprecaterule";
import { FastRestoreRule } from "./fastrestorerule";
import { RetainRule } from "./retainrule";
import { ShareRule } from "./sharerule";
import { Tag } from "./tag";
import { Tag } from "./tag";


// Schedule
/** 
 * Specifies a backup schedule for a snapshot or AMI lifecycle policy.
**/
export class Schedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=CopyTags" })
  copyTags?: boolean;

  @Metadata({ data: "json, name=CreateRule" })
  createRule?: CreateRule;

  @Metadata({ data: "json, name=CrossRegionCopyRules", elemType: shared.CrossRegionCopyRule })
  crossRegionCopyRules?: CrossRegionCopyRule[];

  @Metadata({ data: "json, name=DeprecateRule" })
  deprecateRule?: DeprecateRule;

  @Metadata({ data: "json, name=FastRestoreRule" })
  fastRestoreRule?: FastRestoreRule;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RetainRule" })
  retainRule?: RetainRule;

  @Metadata({ data: "json, name=ShareRules", elemType: shared.ShareRule })
  shareRules?: ShareRule[];

  @Metadata({ data: "json, name=TagsToAdd", elemType: shared.Tag })
  tagsToAdd?: Tag[];

  @Metadata({ data: "json, name=VariableTags", elemType: shared.Tag })
  variableTags?: Tag[];
}

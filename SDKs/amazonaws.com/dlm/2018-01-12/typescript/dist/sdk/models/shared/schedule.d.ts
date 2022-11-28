import { SpeakeasyBase } from "../../../internal/utils";
import { CreateRule } from "./createrule";
import { CrossRegionCopyRule } from "./crossregioncopyrule";
import { DeprecateRule } from "./deprecaterule";
import { FastRestoreRule } from "./fastrestorerule";
import { RetainRule } from "./retainrule";
import { ShareRule } from "./sharerule";
import { Tag } from "./tag";
/**
 * Specifies a backup schedule for a snapshot or AMI lifecycle policy.
**/
export declare class Schedule extends SpeakeasyBase {
    copyTags?: boolean;
    createRule?: CreateRule;
    crossRegionCopyRules?: CrossRegionCopyRule[];
    deprecateRule?: DeprecateRule;
    fastRestoreRule?: FastRestoreRule;
    name?: string;
    retainRule?: RetainRule;
    shareRules?: ShareRule[];
    tagsToAdd?: Tag[];
    variableTags?: Tag[];
}

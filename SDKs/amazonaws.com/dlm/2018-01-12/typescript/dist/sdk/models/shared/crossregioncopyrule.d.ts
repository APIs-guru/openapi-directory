import { SpeakeasyBase } from "../../../internal/utils";
import { CrossRegionCopyDeprecateRule } from "./crossregioncopydeprecaterule";
import { CrossRegionCopyRetainRule } from "./crossregioncopyretainrule";
/**
 * Specifies a rule for cross-Region snapshot copies.
**/
export declare class CrossRegionCopyRule extends SpeakeasyBase {
    cmkArn?: string;
    copyTags?: boolean;
    deprecateRule?: CrossRegionCopyDeprecateRule;
    encrypted: boolean;
    retainRule?: CrossRegionCopyRetainRule;
    target?: string;
    targetRegion?: string;
}

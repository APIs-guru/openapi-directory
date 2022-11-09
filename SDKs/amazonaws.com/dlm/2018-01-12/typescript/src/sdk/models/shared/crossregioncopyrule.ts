import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CrossRegionCopyDeprecateRule } from "./crossregioncopydeprecaterule";
import { CrossRegionCopyRetainRule } from "./crossregioncopyretainrule";


// CrossRegionCopyRule
/** 
 * Specifies a rule for cross-Region snapshot copies.
**/
export class CrossRegionCopyRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=CmkArn" })
  cmkArn?: string;

  @Metadata({ data: "json, name=CopyTags" })
  copyTags?: boolean;

  @Metadata({ data: "json, name=DeprecateRule" })
  deprecateRule?: CrossRegionCopyDeprecateRule;

  @Metadata({ data: "json, name=Encrypted" })
  encrypted: boolean;

  @Metadata({ data: "json, name=RetainRule" })
  retainRule?: CrossRegionCopyRetainRule;

  @Metadata({ data: "json, name=Target" })
  target?: string;

  @Metadata({ data: "json, name=TargetRegion" })
  targetRegion?: string;
}
